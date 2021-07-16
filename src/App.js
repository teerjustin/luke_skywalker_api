import './App.css';
import People from './components/People';
import { React, useState } from 'react'
import { navigate, Router } from '@reach/router'
import Planets from './components/Planets';

function App() {
  
  //give topic a "default" topic such as people
  const [topic, setTopic] = useState("people");
  const [id, setId] = useState();
  //see topic change aka people vs planets
  const changeTopic = e => {
    setTopic(e.target.value);
    console.log("THIS IS TOPIC: ", topic)
  }
  //get id
  const changeId = e => {
    setId(e.target.value);
    console.log("THIS IS ID: ", id)
  }

  //on submit... go here
  const goToPage = (e) => {
    e.preventDefault();
    console.log("THIS IS TOPICCCCCCCCCCCCCCCC", topic);
    var whereToNavigate = "/"+ topic + "/" + id;
    console.log(whereToNavigate);
    navigate(whereToNavigate);
  }


  return (
    <div className="App">
      <form>
        Search for: 
          <select value={topic} onChange={changeTopic}>
              <option value="people">People</option>
              <option value="planets">Planet</option>
          </select>
        
        <label>
          ID:
          <input type="text" onChange={changeId} value = {id}/>
        </label>

        <button onClick={goToPage}> Search </button>
      </form>


      <Router>
          <People path="/people/:id" id={id}  ></People>
          <Planets path="/planets/:id" id={id}  ></Planets>
      </Router>
    </div>
  );
}

export default App;
