import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
   <h1
        className="text-4xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text"
        style={{ backgroundColor: "GrayText" }}
      >
        Switching Colours just like your Bandi!!!! 
      </h1>
      <h2
        className="text-2xl font-semibold text-center bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text"
        style={{ backgroundColor: "GrayText" }}
      >
        no cap!!!
      </h2>
      <div className="w=full h-screen duration-200"
        style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2">

          <div className="fixed flex flex-wrap 
      justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl"
            style={{ backgroundColor: "white" }}>
            <button
              onClick={() => setColor("violet")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "violet" }}>Violet</button>

            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "blue" }}>Blue</button>

            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "green" }}>Green</button>

            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "yellow" }}>Yellow</button>

            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "orange" }}>Orange</button>

            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
              style={{ backgroundColor: "red" }}>Red</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
