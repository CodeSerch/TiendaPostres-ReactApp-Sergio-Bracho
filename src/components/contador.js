import { useEffect, useState } from "react";

const Contador = ({count, setCount}) => {
  const increment = () => {
    setCount(count + 1);
  }
  const Reset = () => {
    setCount(1);
  }
  return (
    <div style={{display:"flex", textAlign:"center",alignItems:"center", justifyContent:"center"}}>
      <p style={{marginBottom:"0px"}}>{count}</p>
      <button onClick={increment}  style={{backgroundColor:"#25c1ff", padding:"6px"}}>
        +
      </button>
      <button onClick={Reset} style={{backgroundColor:"#25c1ff", padding:"6px"}}>
        -
      </button>
    </div>
  );
}
export default Contador;