import { useState } from 'react'
//import Chai from "./Chai"
function App() {
  let [counter, setCounter] = useState(15)
  const addValue = () => {
    // console.log("clicked",counter);
    setCounter(counter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    //<Chai />
    <>
      <h1>Counter value: {counter}</h1>
      <button
        onClick={addValue}
      >Add Value{counter}</button>
      <br />
      <button
        onClick={removeValue}
      >Remove Value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
