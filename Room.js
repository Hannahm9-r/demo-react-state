import React, { useState } from "react";

function Room() {
  let [isLit, setLit] = useState (false);
  let [age, setAge] = useState (24);

  function updateLit () {
      console.log ("Button clicked");
      setLit(!isLit);
  }

  function increaseAge () {
    console.log ("increaseAge Button clicked");
    setAge(++age);
}
  return (
    <div>
      This room is {isLit ? "Lit" : "Dark"}
      <br/>
      Age : {age}
      <br/>
      <button onClick = {updateLit} >Toggle Light</button>
      <br/>
      <button onClick = {increaseAge} >increase Age</button>
    </div>
  );
}

export default Room;
