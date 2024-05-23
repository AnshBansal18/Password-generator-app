import React, { useState, useCallback, useEffect } from 'react';

const PasswordGenerator = ({ len, numall, charall }) => {
  const [pass, setPass] = useState("");

  const passgen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numall) str += "0123456789";
    if (charall) str += "!@#$%^&*()_+[]{}|;:,.<>?";

    let generatedPass = "";
    for (let i = 0; i < len; i++) {
      let char = Math.floor(Math.random() * str.length);
      generatedPass += str.charAt(char);
    }
    setPass(generatedPass);
  }, [len, numall, charall]);

  const copypasstokey = useCallback(() => {
    window.navigator.clipboard.writeText(pass);
    alert(`Password copied to the clipboard: ${pass}`);
  }, [pass]);

  useEffect(() => {
    passgen();
  }, [len, numall, charall, passgen]);

  return (
    <div>
      <input
        type="text"
        value={pass}
        className="w-full py-2 px-4 text-white bg-gray-700 rounded-xl mb-4"
        placeholder="Generated Password"
        readOnly
      />
      <button
        onClick={copypasstokey}
        type="button"
        className="bg-green-400 px-6 py-3 text-sm font-semibold text-white rounded-full shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50 mb-4"
      >
        Copy Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
