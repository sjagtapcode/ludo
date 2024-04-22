"use client"

import { useState } from "react";

const Game = () => {
  const [history, setHistory] = useState<Array<number>>([]);
  const [value, setValue] = useState([0,0,0,0]);
  const handleClick = () => {
    const val1 = Math.floor((Math.random() * 10) % 2);
    const val2 =  Math.floor((Math.random() * 10) % 2);
    const val3 =  Math.floor((Math.random() * 10) % 2);
    const val4 =  Math.floor((Math.random() * 10) % 2);
    setValue([val1, val2, val3, val4]);
    const count = value.reduce((acc, val) => acc + val, 0);
    const final = count === 4 ? 8 : count === 0 ? 4 : count;
    setHistory((prev) => [...prev, final]);
  }
  const count = value.reduce((acc, val) => acc + val, 0);
  const final = count === 4 ? 8 : count === 0 ? 4 : count;
  return (
    <div className="m-auto w-[400px] flex flex-col justify-center items-center gap-[20px]">
      <h1 className="m-auto text-center">Game</h1>
      <ul className="flex gap-[20px] justify-center">
        <li className="w-[40px] h-[40px] rounded-full" style={{ background: value[0] ? 'white' : 'yellow'}}></li>
        <li className="w-[40px] h-[40px] rounded-full" style={{ background: value[1] ? 'white' : 'yellow'}}></li>
        <li className="w-[40px] h-[40px] rounded-full" style={{ background: value[2] ? 'white' : 'yellow'}}></li>
        <li className="w-[40px] h-[40px] rounded-full" style={{ background: value[3] ? 'white' : 'yellow'}}></li>
        {final}
      </ul>
      <button onClick={handleClick} className="text-center w-[100px] h-[30px] bg-red-300">Click</button>
      <ul>
        {history?.toReversed().map((val, index) => <li key={index}>{val}</li>)}
      </ul>
    </div>
  )
}

export default Game;
