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
    {name: "Frodo"},
    {name: "Gimley"},
      ]}
  }
render(){
  return (
    <div>
      <h1>Characters</h1>
      {
        this.state.characters.map((eachChar)=>{
          return (
            <div className="characterContainer">
              <p>{eachChar.name}</p>
            </div>
          )
        })
      }
    </div>
   );
}

}

export default App;
