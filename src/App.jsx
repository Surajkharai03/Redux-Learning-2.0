import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/features/counterSlice'

const App = () => {
  const dispatch = useDispatch()   // kaam karvana h toh useDispatch
  const count = useSelector((state)=>state.counter.value)     // value show karani h toh useSelector, and phle state m gye fir counter m (store) and then value(counterslice)

  const [num, setnum] = useState(5)
  return (
    <div>

      <h1 >{count}</h1>

      <button onClick={() => {
        dispatch(increment())        // call krna h 

      }}>Increment</button>

      <button onClick={() => {
        dispatch(decrement())

      }}>Decrement</button>

      <input type='number'
      value={num}

       onChange={(e) =>{
        setnum(e.target.value);
        

      }}/>

      <button onClick={() =>{
        dispatch(incrementByAmount(Number(num)))  // kitni value se increase krna h

      }}>
        Increase by Amount
      </button>
    </div>
  )
}

export default App