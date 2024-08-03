//Guess the word - correct words -  [ "james" , "sea" , "mess", "jess" ] , 
// characters allowed = ["a","e","s","j","m"]  ,
// one correct - 10 points, print score after 60 sec.

import React from 'react'

function p() {
    const[inputval,setInputval]= useState("")
    const arr=["james" , "sea" , "mess", "jess"]
  const allowedCharacters=["a","e","s","j","m"]
  
  const handleInput=(e)=>{
    console.log(e)
  if(allowedCharacters.includes(e.key)){
    setInputval((inputval)=>inputval+e.key)
  }else if(e.key==="Backspace"){
    setInputval("")
  }
  else{
    e.preventDefault();
  }
  }
  function winningScore(){
  if(arr.includes(inputval)){
    alert('congratulations! you have won 10 points')
  }else{
    alert('oh no, please try again')
  }
  }
  return (
    <div>
        <input type='text' value={inputval} onKeyDown={handleInput}  ></input>
        <button type='submit' onClick={winningScore}>Submit</button>
    </div>
  )
}

export default p