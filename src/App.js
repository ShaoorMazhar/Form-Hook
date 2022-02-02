//hooks counter
// import React, { useEffect, useState } from 'react';
// import './App.css';
// function Form(){
//  const[count, setCount]=useState(1);
// useEffect(() => {
//   console.warn(count)
// },)
//   return(
//     <div>
//       <h1>React Js hooks count {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Add </button>
//     </div>
//   )
// }
// export default Form;
import React from'react';
import Person from './Person.js'
function Form(){
  return(
  <Person />
  );
}
export default Form;