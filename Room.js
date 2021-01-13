import React, { useState } from "react";
import './Room.css';

function Room() {
  let [isLit, setLit] = useState (false);
  let [age, setAge] = useState (24);

 
  return (
    <div className = {`room ${(isLit? "lit" : "dark")}`}>
      This room is {isLit ? "Lit" : "Dark"}
      <br/>
      Age : {age}
      <br/>
      <button onClick = {()=> setLit(!isLit)} >Toggle Light</button>
      <br/>
      <button onClick = { ()=> {
          console.log ("Increase Age arrow function");
          setAge(++age);}
          } >increase Age</button>
    </div>
  );
}

export default Room;



























 /*function updateLit () {
      console.log ("Button clicked");
      setLit(!isLit);
  }
  */

/*
  function increaseAge () {
    console.log ("increaseAge Button clicked");
    setAge(++age);
}
*/