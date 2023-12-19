import React, { useState } from 'react'
import MemoizedSub from './MemoizedSub'

interface ChildProps {
    name: string 
}
//Child component without React.memo
const ChildCompoent = ({name} : ChildProps)=>{
    console.log(`Rendering ChildComponent : ${name}`)
    return <div>{name}</div>
}

//Child component with React.memo
const MemoizedChildComponent = React.memo(({name}:ChildProps) =>{
    console.log(`Rending MemoizedChildComponent : ${name}`)
    return(
        <div>{name}</div>
    )
},(prevProps , nextProps)=>{
    return prevProps.name ===nextProps.name ; 
})


//Parent Component
const ReactMemo:React.FC = () => {
    const [name , setName] = useState("Duong") ; 
    const [counter,setCounter] = useState<number>(0) ; 

    const handleChangeName = ()=>{
        setName("Thuyet") ; 
    }
    const handleChangeCounter = ()=>{
        setCounter((prevState)=> prevState+1)
    }
  return (
    <div>
        <button className='btn btn-primary m-2' onClick={handleChangeName}>Change Name</button>
        <button className='btn btn-secondary m-2' onClick={handleChangeCounter}>Change Counter</button>
        <h2>{counter}</h2>
        <ChildCompoent name={name}></ChildCompoent>
        <MemoizedChildComponent name={name}></MemoizedChildComponent>
        <MemoizedSub name={name}></MemoizedSub>
    </div>
  )
}

export default ReactMemo
