import { useEffect, useState } from "react";

const Contador = ({count, setCount}) => {
  const increment = () => {
    setCount(count + 1);
  }
  const Reset = () => {
    setCount(1);
  }
  return (
    <div>
      <p>Cantidad a agregar: {count}</p>
      <button onClick={increment}>
        Click
      </button>
      <button onClick={Reset}>
        Resetear
      </button>
    </div>
  );
}
export default Contador;