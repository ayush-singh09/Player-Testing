import React from 'react'
import { useRef } from "react";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { MdSkipNext } from "react-icons/md";
import { MdSkipPrevious } from "react-icons/md";

function Player() {
    const timeRef = useRef(null);
    const [duration, setDuration] = useState(0);
    setTimeout(() => {
      setDuration(timeRef.current.duration);
    }, 500);
  
    const changeDuration = (val) => {
      timeRef.current.currentTime = val;
    };
  
    const play = () => {
      if (timeRef.current.paused) timeRef.current.play();
      else timeRef.current.pause();
    };
  
    const keyPlay = () => {};
  
    const [time, setTime] = useState(0);
  
    return (
      <div className="bg-red-400 flex flex-col gap-5 items-center p-10 w-96 h-fit m-auto rounded-xl mt-10">
        <div className="h-56 w-56 bg-sky-300 rounded-full"></div>
        <div className="flex flex-col items-start text-2xl w-full">
          <h1 className="font-bold ">Banjaara</h1>
          <h1 className=" text-base">Song Creator</h1>
        </div>
        <audio
          ref={timeRef}
          onTimeUpdate={() => {
            setTime(timeRef.current.currentTime);
          }}
          className="aud"
          src="..\assets\Banjaara.mp3"
        ></audio>
  
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-between px-1">
            <h1>
              {Math.floor(time / 60)}:{Math.floor(time % 60)}
            </h1>
            <h1>
              {Math.floor(duration / 60)}:{Math.floor(duration % 60)}
            </h1>
          </div>
          <input
            className="inp w-full h-1"
            onChange={(e) => {
              changeDuration(e.target.value);
              setTime(e.target.value);
            }}
            value={time}
            type="range"
            min={0}
            max={duration}
          />
          <div className=" flex justify-between text-white mt-5">
            <button className="bg-black h-10 w-10 rounded-full flex items-center justify-center">
              <MdSkipPrevious />
            </button>
            <button
              onClick={play}
              className="bg-black h-10 w-10 rounded-full flex items-center justify-center"
            >
              {!timeRef?timeRef.current.paused?<FaPlay/>:<FaPause/>:<FaPlay/>}
            </button>
            <button className="bg-black h-10 w-10 rounded-full flex items-center justify-center">
              <MdSkipNext />
            </button>
          </div>
        </div>
      </div>
    );
}

export default Player
