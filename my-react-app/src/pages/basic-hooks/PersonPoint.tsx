import React, { useEffect } from 'react'
interface PersonPointInfo {
    point?:number  ; 
    finalPoint:number ; 
    changePoint?:()=>void ; 
    setPoint:(point:number)=>void
}

const PersonPoint = (props:PersonPointInfo) => {
    const {point , finalPoint , changePoint , setPoint} = props ; 
  
    //cach 4
    useEffect(()=>{
        //logic to  run affter each render
        //Cleanup function
        return ()=>{
            //Cleanup logic (clearInterval ,remove event listentner,....)
            console.log("componentWillUnmount") ; 
        }
    }) 
    return (
    <div>
        <h3 style={{ color:"orange" }}>Your point : <span>{point}</span></h3>
        <h3>Your final point : <span style={{ color:"green" }}>{finalPoint}</span></h3>
        <button onClick={changePoint} className='btn btn-dark m-2'>Change Point</button>
        <button onClick={()=>setPoint(2)} className='btn btn-danger m-2'>Change Finbal Point</button>
    </div>
  )
}

export default PersonPoint