"use client";
import React, { useState } from "react";

export default function HomePage() {
  const [list, setList] = useState({
    "Clean my room.": false,
    "Wash the dishes.": false,
    "Clean the car.": false,
  });
  const [input, setInput] = useState("");

  const handleDone = (key) =>{
    setList({...list, [key]: !list[key]})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setList({...list, [input]: false});
    setInput("");
  };

  return (
    <div className="h-[500px] w-[90%] max-w-[500px] rounded-[20px] border border-gray-200 bg-white mx-auto mt-[40px]">
      <div className="text-[35px] font-bold text-center my-2">
        Our To Do List:
      </div>
      <div className="h-[350px] overflow-auto text-[25px] text-center">
        {Object.entries(list).map(([key, value]) => (
          <div onClick={()=> handleDone(key)} className={`cursor-pointer ${value? 'line-through' : ''}`}>{key}</div>
        ))}
      </div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className=" flex items-center justify-center gap-x-4"
      >
        <input
          required
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="what to do?"
          className="border outline-none border-gray-500 text-[22px] w-3/4 h-[45px] p-3 bg-blue-100 rounded-[15px]"
        />
        <button
          type="submit"
          className="rounded-full h-[45px] w-[45px] bg-blue-500 hover:bg-blue-300 text-white"
        >
          +
        </button>
      </form>
    </div>
  );
}
