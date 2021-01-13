import React, { useState } from "react";
import './Room.css';

function Room() {
  let [isLit, setLit] = useState (false);
  let [age, setAge] = useState (24);

  //Assignment temp , on , and off (buttons)
  let [temp, setTemp] = useState (22);

 
  return (
    <div className = {`room ${(isLit? "lit" : "dark")}`}> 
      This room is {isLit ? "Lit" : "Dark"}
      <br/>
      Age : {age}
      <br/>
      The Room Temperature is: <quote><b>{temp}</b><sup>o</sup>C</quote>


      <button onClick = {() => {
          console.log ('Inc temp arrow func')
          setTemp(++temp)}}>+
          </button>


      <button onClick = {() => {
          console.log ('Dec temp arrow func')
          setTemp(--temp)}}>-
          </button>


      <br/>
      <button onClick = {()=> setLit(!isLit)} >Toggle Light</button>



      <br/>
      <button onClick = { ()=> {
          console.log ("Increase Age arrow function");
          setAge(++age);}
          } >increase Age</button>

          <div>
              <button onClick = {() => setLit(isLit? isLit : !isLit)}>ON</button>

              
              <button onClick = {() => setLit(isLit? !isLit : isLit)}>OFF</button>
          
          </div>  
    
    </div>
  );
}

export default Room;





















// These functions were changed to arrow functions.
//                ^
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