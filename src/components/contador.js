import { useEffect, useState } from "react";

const Contador = ({ }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }
  const Reset = () => {
    setCount(0);
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