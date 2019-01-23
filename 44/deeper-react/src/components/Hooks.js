import React, { useState, useEffect } from 'react';


export default function Hooks() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('Joe')

  useEffect(() => {
    console.log('use effect running')
  }, [name])
  return (
    <div>
      <h1>Hooks API test!</h1>
      <p>No more class components!</p>
      <p>No more this</p>
      <p>No more setState()</p>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Name</button>
      <br /><br />
      <p>{name}</p>
      <input value={name} type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}