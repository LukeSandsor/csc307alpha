const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/users', (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    
   if((name != undefined) & job != undefined){
      let result = findUserByJobAndName(job, name);
      result = {users_list: result};
      res.send(result);
   }
   else if(job != undefined){
        let result = findUserByJob(job);
        result = {users_list: result};
        res.send(result);
   }
   else if(name != undefined){
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
   }
   else{
        res.send(users);
   }
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    let result = findUserById(id);
    if (result === undefined || result.length == 0)
        res.status(404).send('Resource not found.');
    else {
        result = {users_list: result};
        res.send(result);
    }
});

function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
}

const findUserByName = (name) => { 
    return users['users_list'].filter( (user) => user['name'] === name); 
}

const findUserByJob = (job) => { 
    return users['users_list'].filter( (user) => user['job'] === job); 
}

const findUserByJobAndName = (job, name) => { 
   return users['users_list'].filter( (user) => (user['job'] === job) && (user['name'] === name)); 
}

app.post('/users', (req, res) => {
    const userToAdd = req.body;
    addUser(userToAdd);
    res.status(201).send(userToAdd).end();
});

function addUser(user){
   if(!user.id){
      const newId = Math.floor(Math.random() * 999999);
      user.id = newId.toString();
   }
   users['users_list'].push(user);
}

app.delete('/users/:id', (req, res) => {
   const userToDel = req.params.id;
   if(delUser(userToDel)){
     res.status(204).end();
   }
   res.status(404).end();
});

function delUser(userToDel){
  const index = users['users_list'].findIndex((user) => user['id'] === userToDel);
  if(index != -1){
     users['users_list'].splice(index, 1);
     return true
  }
  return false
}
const users = { 
   users_list :
   [
      { 
         id : 'xyz789',
         name : 'Charlie',
         job: 'Janitor',
      },
      {
         id : 'abc123', 
         name: 'Mac',
         job: 'Bouncer',
      },
      {
         id : 'ppp222', 
         name: 'Mac',
         job: 'Professor',
      }, 
      {
         id: 'yat999', 
         name: 'Dee',
         job: 'Aspring actress',
      },
      {
         id: 'zap555', 
         name: 'Dennis',
         job: 'Bartender',
      },
      {
         id: 'joe579', 
         name: 'Dennis',
         job: 'Progenitor God of All',
      },
      {
         id: 'kia248', 
         name: 'Cthulu',
         job: 'Bartender',
      }
   ]
}