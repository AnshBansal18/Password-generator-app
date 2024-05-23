import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';

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
  }, [len, numall, charall]);

  const copypasstokey = useCallback(() => {
    window.navigator.clipboard.writeText(pass)
    alert(`Password copied to the clipboard : ${pass}`)
  }, [pass])

  useEffect(() => { passgen() }, [len, numall, charall, passgen])
  const passcopy = useRef(null)

  return (
    <>
      <Header />
  
      <div className='flex items-center justify-center min-h-screen bg-gray-900'>
        <div className='flex flex-col items-center bg-gray-800 text-white w-full max-w-md mx-auto shadow-md rounded-xl p-8 mt-1'>
          <h1 className='text-3xl mb-6'>Password Generator</h1>
          <input
            type="text"
            value={pass}
            className='w-full py-2 px-4 text-white bg-gray-700 rounded-xl mb-4'
            placeholder='Generated Password'
            readOnly
            ref={passcopy}
          />
          <button
            onClick={copypasstokey}
            type="button"
            className="bg-green-400 px-6 py-3 text-sm font-semibold text-white rounded-full shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mb-4"
          >
            Copy Password
          </button>
          <div className='w-full flex flex-col space-y-4'>
            <div className='flex items-center'>
              <label className='flex-grow'>Password Length:</label>
              <input
                type="range"
                min={6}
                max={18}
                value={len}
                className='flex-grow'
                onChange={(e) => {
                  setLen(e.target.value);
                }}
              />
              <span className='ml-2'>{len}</span>
            </div>
            <div className='flex items-center'>
              <input
                type="checkbox"
                checked={numall}
                id="numberInput"
                onChange={() => {
                  setNumall((prev) => !prev);
                }}
              />
              <label htmlFor="numberInput" className='ml-2'>Include Numbers</label>
            </div>
            <div className='flex items-center'>
              <input
                type="checkbox"
                checked={charall}
                id="charInput"
                onChange={() => {
                  setCharall((prev) => !prev);
                }}
              />
              <label htmlFor="charInput" className='ml-2'>Include Special Characters</label>
            </div>
          </div>
        </div>
      </div>
  
      <Footer />
    </>
  );
}

export default App;
