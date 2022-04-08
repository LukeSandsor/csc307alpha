import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from './Table';
import Form from './Form';

function MyApp() {
  const [characters, setCharacters] = useState([]);  

  function removeOneCharacter (index) {
    const updated = characters.filter((character, i) => {
      return i !== index
    });
    setCharacters(updated);
  }
  
  function updateList(person) {
    setCharacters([...characters, person]);
  }

  async function fetchAll(){
    try {
      const response = await axios.get('http://localhost:5000/users');
      return response.data.users_list;
    }
    catch (error){
      //not doing anything with error, just acknoledging it
      console.log(error);
      return false;
    }
  }

  
useEffect(() => {
  fetchAll().then( result => {
    if (result)
      setCharacters(result);
  });
}, [] );

return (
    <div className="container">
      <Table characterData={characters} removeCharacter={removeOneCharacter} />
      <Form handleSubmit={updateList}/>
    </div>
  )
}


export default MyApp;