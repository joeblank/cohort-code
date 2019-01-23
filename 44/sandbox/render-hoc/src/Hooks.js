import React, { useState } from 'react';

export default function Hooks() {
  const [count, setCount] = useState(10)
  const [email, setEmail] = useState('')
  return (
    <React.Fragment>
      <h1>Hooks Intro</h1>
      <p>No more classes</p>
      <p>No more this</p>
      <p>No more setState()</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Email <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" /></p>
      <p>Value from input: {email}</p>
    </React.Fragment>
  )
}