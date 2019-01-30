import React, { useState, useEffect } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [name, updateName] = useState('joe')
  const [userInput, updateInput] = useState('')

  useEffect(() => {

    return () => { }
  }, [name, counter])

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>add</button>
      <p>The number is currently: {counter}</p>
      <p onClick={() => updateName('ned')}>My Name is: {name}</p>
      <hr />
      <input type="text" value={userInput} onChange={e => updateInput(e.target.value)} />
      <p>What i typed: {userInput}</p>
    </>
  )
}