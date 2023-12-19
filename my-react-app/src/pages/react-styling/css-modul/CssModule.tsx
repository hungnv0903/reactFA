import React, { Fragment, useState } from 'react'
import styled from './CssModul.module.css' ;   
const CssModule = () => {
    const [count , setCount] = useState(0) ; 
    const decreaseCount = ()=>{
        setCount((prevCount)=>prevCount-1) ; 
    }

    const increaseCount = ()=>{
        setCount((prevCount)=>prevCount+1) ; 
    }
  return (
    <Fragment>
        <h2>CSS Module</h2>
        <div className='main-content'>
            <h3>Styling</h3>
            <div className="counter">This is counter example</div>
            <div className={styled.counter}>
                <button onClick={decreaseCount} className={`${styled.button} ${styled.first}`}>-</button>
                <div>
                    <span className='spanRotate'>{count}</span>
                </div>
                <button onClick={increaseCount} className={`${styled.button} ${styled.secondary}`}>+</button>
            </div>
        </div>
    </Fragment>
  )
}

export default CssModule ; 
