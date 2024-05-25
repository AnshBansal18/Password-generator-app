import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Footer from './Component/Footer';
import PasswordGenerator from './Component/PasswordGenerator';
import LengthInput from './Component/LengthInput';
import Checkbox from './Component/Checkbox';

function App() {
  const [len, setLen] = useState(8);
  const [numall, setNumall] = useState(false);
  const [charall, setCharall] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <Header />

      <div className="flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center bg-gray-800 text-white rounded-xl p-8 mt-8 shadow-md sm:p-6 md:p-8 lg:p-10 xl:p-12 animate-fadeIn">
          <h1 className="text-3xl mb-8 text-purple-400 font-bold text-center animate-pulse">Secure Password Generator</h1>
          <PasswordGenerator len={len} numall={numall} charall={charall} />
          <div className="mt-6 w-full max-w-sm">
            <LengthInput len={len} setLen={setLen} />
            <Checkbox
              label="Include Numbers"
              checked={numall}
              onChange={() => setNumall((prev) => !prev)}
            />
            <Checkbox
              label="Include Special Characters"
              checked={charall}
              onChange={() => setCharall((prev) => !prev)}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
