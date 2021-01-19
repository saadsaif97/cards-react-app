import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';
function App() {

  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json() )
    .then((data) => setMonsters(data) );
  }, []);

  useEffect(()=>{
    console.log(searchField);
  }, [searchField])
  
  const filteredMonsters = monsters.filter(monster=> 
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <div className='App'>
      {monsters.length === 0 ? ( <h1> {' '} <code>Loading...</code>{' '} </h1> ) : ( '' )}
      <SearchBox
        placeholder='search user'
        handleChange={(e) => {
          setSearchField(e.target.value)
        }}
      />
      {filteredMonsters.length === 0 && monsters.length > 0 ? ( <h3>No results found</h3> ) : ( '' )}
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;