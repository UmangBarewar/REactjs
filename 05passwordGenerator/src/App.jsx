import { useState, useCallback, useEffect, useRef } from 'react'



function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  // last line of callback function in [] there are the dependencies in which if any change occurs the function
  // will call itself and update th ui

// useCallback() hook memories part of the function so it doesn't have to re render all the
// the function. This optimizes the function and saves rendering time

  const copyPasswordToClipboard = useCallback(() => {

    passwordRef.current?.select();// this helps in highlighting the copied text
    passwordRef.current?.setSelectionRange(0, 999); // this helps in selecting the numbers which are copied in {password}   window.navigator.clipboard.writeText(password)
  }, [password])
// ?. helps in optional chaining if the values selected are null, undefined or not. this makes sure that it does not throw any error
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
  )
}

export default App




// Alternate app

// import { useState, useCallback } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import './App.css';

// function App() {
//   const [length, setLength] = useState(8);
//   const [numAllowed, setNumAllowed] = useState(false);
//   const [charAllowed, setCharAllowed] = useState(false);
//   const [password, setPassword] = useState('');

//   const passwordGenerator = useCallback(() => {
//     let pass = '';
//     let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
//     if (numAllowed) str += '0123456789';
//     if (charAllowed) str += '!@#$%^&*_+{}:>~?`';

//     for (let i = 0; i < length; i++) {
//       pass += str.charAt(Math.floor(Math.random() * str.length));
//     }
//     setPassword(pass);
//   }, [length, numAllowed, charAllowed]);

//   return (
//     <>
//       <h1 className='text-4xl text-center text-white'>Password Generator</h1>
//       <div className='flex flex-col items-center mt-8'>
//         <label className='text-white'>Password Length:</label>
//         <input
//           type='number'
//           value={length}
//           onChange={(e) => setLength(parseInt(e.target.value))}
//           className='border border-gray-400 rounded-md p-1 m-2'
//         />
//         <div className='flex items-center m-2'>
//           <input
//             type='checkbox'
//             checked={numAllowed}
//             onChange={(e) => setNumAllowed(e.target.checked)}
//             className='m-1'
//           />
//           <label className='text-white'>Include Numbers (0-9)</label>
//         </div>
//         <div className='flex items-center m-2'>
//           <input
//             type='checkbox'
//             checked={charAllowed}
//             onChange={(e) => setCharAllowed(e.target.checked)}
//             className='m-1'
//           />
//           <label className='text-white'>Include Special Characters</label>
//         </div>
//         <button onClick={passwordGenerator} className='bg-blue-500 text-white p-2 rounded-md m-2'>
//           Generate Password
//         </button>
//         <div className='text-white m-2'>Generated Password: {password}</div>
//       </div>
//     </>
//   );
// }

// export default App;
