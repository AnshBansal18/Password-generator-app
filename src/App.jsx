import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [len, setLen] = useState(8);
  const [numall, setNumall] = useState(false);
  const [charall, setCharall] = useState(false);
  const [pass, setPass] = useState("");

  const passgen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numall) str += "0123456789";
    if (charall) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPass(pass);
  }, [len, numall, charall, setPass]);

  const copypasstokey=useCallback(()=>{
    window.navigator.clipboard.writeText(pass)
    alert(`Password copied to the clipboard : ${pass}`)
  },[pass])


  useEffect(()=>{passgen()},[len,numall,charall,passgen])
  const passcopy=useRef(null)


  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-900'>
  <div className='w-full max-w-md mx-auto shadow-md rounded-xl px-8 py-6 bg-gray-800 text-white'>
    <h1 className='text-3xl text-center mb-6'>Password Generator</h1>
    <div className='flex flex-col items-center space-y-4'>
      <input
        type="text"
        value={pass}
        className='outline-none w-full py-2 px-4 text-white bg-gray-700 rounded-xl focus:ring-2 focus:ring-green-400 focus:ring-opacity-50'
        placeholder='Password'
        readOnly
        ref={passcopy}
      />
      <button
        onClick={copypasstokey}
        type="button"
        className="rounded-full bg-green-400 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50"
      >
        Copy
      </button>
      <div className='flex items-center gap-x-1'>
        <input 
          type="range"
          min={6}
          max={18}
          value={len}
          className='cursor-pointer'
          onChange={(e) => {
            setLen(e.target.value);
          }}
        />
        <label>Length : {len}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          checked={numall}
          id="numberInput"
          onChange={() => {
            setNumall((prev) => !prev);
          }}
        />
        <label htmlFor="numberInput" >Number</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
          type="checkbox"
          checked={charall}
          id="charInput"
          onChange={() => {
            setCharall((prev) => !prev);
          }}
        />
        <label htmlFor="chatInput" >Characters</label>
      </div>
    </div>
  </div>
</div>

  );
}

export default App;
