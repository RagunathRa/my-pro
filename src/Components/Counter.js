import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount((prevvalues) => prevvalues + 1)
    }
    const Decrement = () => {
        setCount(count - 1)
    }
    const Reset = () => {
        setCount(0)
    }
    return (
      
        <div style={ { alignItems: 'center' }}>
        {/*   */}
            <h1  style={ { alignItems: 'center', flexDirection: 'column' }}>Counter</h1>
            <button   className='hey' onClick={Decrement}>-Decrement</button>
           
            <button >({count})</button>
            <button className='hey' onClick={Increment} style={{ color: 'green', font: '5px' }}>+Increment</button>
            <button className='hey' onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter
