import React, { useState } from 'react'
import PassLength from './passLen';
import ReactDOM from "react-dom/client";
import { CopyToClipboard } from "react-copy-to-clipboard";
import './pass.css';

const PasswordGen = () => {

  const [password, setPassword] = useState("");
  const [passLen, setPassLen] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [spacial, setSpecial] = useState(true);
  const [num, setNum] = useState(true);

  // set password length
  const setPassLength = (a) => {
    setPassLen(a);
  }

  let generatePassword = () => {

    let pass = "";
    const charList = [
      uppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
      lowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
      num ? '0123456789' : '',
      spacial ? '!@#$%^&*()_-+=' : '',
    ].join('');
    console.log(charList);
    for (let index = 0; index < passLen; index++) {
      const randomIndex = Math.floor(Math.random() * charList.length);
      pass += charList[randomIndex];
    }
    setPassword(pass);
    console.log(password);
  }
  // copy to clipboard
  function myFunction() {
    const copyText = ReactDOM.createRoot(document.getElementById("myInput"));
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);

    alert("Copied the text: " + copyText.value);
  }



  return (
    <div id="main">

      <div className="body">
        <h1>Password Generator</h1>
        <PassLength setLength={setPassLength}></PassLength>

        <div className='checkboxes'>
          <lebel><input type="checkbox" checked={spacial} onChange={() => setSpecial(!spacial)}></input> : Special Char</lebel>
          <lebel><input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)}></input> : Uppercase Char</lebel>
          <lebel><input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)}></input> : Lowercase Char</lebel>
          <lebel><input type="checkbox" checked={num} onChange={() => setNum(!num)}></input> : Number Char</lebel>
        </div>
        <div class="genBtn"><button onClick={generatePassword}>Generate Password</button> </div>
        <div className='pass_copy'>
          <input type="text" value={password} id="myInput" placeholder='...' />
          <CopyToClipboard
            text="text"
            onCopy={() => alert("Copied")}>
            <span className='copy'>Copy!</span>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  )
}

export default PasswordGen
