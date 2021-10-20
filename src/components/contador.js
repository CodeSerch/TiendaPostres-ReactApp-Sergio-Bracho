import React, { useState } from 'react';

function Contador(){
    const [count, setCount] = useState(0);
    const [time, setTime] = useState(0);
    const increment = () => {
        setCount(count + 1);
        setTime(new Date().toLocaleTimeString());
    }
    const Reset = () => {
        setCount(0);
        setTime(0);
    }
    return (
        <div>
          <p>Numero de Clicks: {count}</p>
          <p>Ultimo Click: {time}</p>
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