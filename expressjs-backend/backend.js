const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const user_model = require('./models/users-services.js');

app.use(cors());

app.use(express.json());

//app.use(mongoose)

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/users', async (req, res) => {
    const name = req.query.name;
    const job = req.query.job;
    const result = await user_model.getUsers(name, job);
    if (result === null || result === undefined)
      res.status(404).send("Resource not found");
    res.send({users_list: result});
   });

app.get('/users/:id', async (req, res) => {
    const id = req.params.id;
    const result = await user_model.findUserById(id);
    if (result === null || result === undefined)
         res.status(404).send('Resource not found.');
    else {
        res.send({user_list: result});
    }
});

app.post('/users', async (req, res) => {
    const userToAdd = req.body;
    const result = await user_model.addUser(userToAdd);
    if (result)
      res.status(201).send(result).end();
});

app.delete('/users/:id', async (req, res) => {
   const userToDel = req.params.id;
   const result = user_model.delUser(userToDel);
   if(result){
     res.status(204).end();
   }
   res.status(404).end();
});


/*
DEAD CODE KEEPING UNTIL FINAL PUSH
const findUserByName = (name) => { 
   return users['users_list'].filter( (user) => user['name'] === name); 
}

const findUserByJob = (job) => { 
   return users['users_list'].filter( (user) => user['job'] === job); 
}

const findUserByJobAndName = (job, name) => { 
  return users['users_list'].filter( (user) => (user['job'] === job) && (user['name'] === name)); 


function findUserById(id) {
    return users['users_list'].find( (user) => user['id'] === id); // or line below
}
}*/