//tech imports
import React, { useState, useEffect } from "react";
import axios from "axios";
//styling imports
import "../src/index.css";


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      characters: [
    {character_name: "Frodo"},
    {character_name: "Gimley"},
      ]}
  }

componentDidMount(){
  axios.get("https://lordoftheringscharacters.herokuapp.com/api/characters")
  .then((res)=>{
    console.log("SUCCEEDED GETTING ALL CHARS", res.data);
    this.setState({
      ...this.state,
      characters: res.data
    })
    console.log(this.state.characters)
  })
  .catch((err)=>{
    console.log("FAILED GETTING ALL CHARACTERS", err);
  })
}

render(){
  return (
    <div>
      <h1>Characters</h1>
      {
        this.state.characters.map((eachChar)=>{
          return (
            <div className="characterContainer">
              <p>{eachChar.character_name}</p>
            </div>
          )
        })
      }
    </div>
   );
}

}

export default App;
