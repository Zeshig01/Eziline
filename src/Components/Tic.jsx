import React, { useState } from 'react';
import cross from '../assets/cross.png';
import circle from "../assets/circle.png";

function Tic() {
  const [data, setData] = useState(["", "", "", "", "", "", "", "", ""]);
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);

  const toggle = (index) => {
    if (lock || data[index]) return;

    let newData = [...data];
    newData[index] = count % 2 === 0 ? 'X' : 'O';
    setData(newData);
    setCount(count + 1);

    // Add logic here to check for a win or draw and setLock(true) if the game is over.
  };

  const renderSquare = (value, index) => (
    <div
      key={index}
      className='h-32 w-32 bg-red-100 mb-2 p-10 flex justify-center items-center text-4xl'
      onClick={() => toggle(index)}
    >
      {value === 'X' ? <img src={cross} alt="cross" /> : value === 'O' ? <img src={circle} alt="circle" /> : null}
    </div>
  );

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div className='grid grid-cols-3 gap-2'>
        {data.map((value, index) => renderSquare(value, index))}
      </div>
    </div>
  );
}

export default Tic;
