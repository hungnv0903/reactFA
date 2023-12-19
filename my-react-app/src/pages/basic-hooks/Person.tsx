import React, { useEffect, useState } from 'react'
import PersonPoint from './PersonPoint';

function Person() {
    // useState 
    const [name, setName] = useState<string>("Hieu");
    const [age, setAge] = useState<number>(24);
    const [point, setPoint] = useState(1);
    const [finalPoint, setFinalPoint] = useState(point * 10);
    const [emptyState, setEmtyState] = useState() //undefine 
    const [destroyed , setDestroyed] = useState<boolean>(false) ; 


    const handleChangeName = (): void => {
        setName("Nam");
    }
    const changePoint = () => {
        setPoint((prevState) => (prevState + 1));
    };  

    const changeFinalPoint = (point: number) => {
        setFinalPoint((prevState) => (prevState + point) * 10);
    }

    //useEffect

    //cach 1 : Run affter mounting
    useEffect(()=>{
        // logic to run once affter the compoent mounted
        console.log("componentDidMount") ; 
    },[])

    //cach2 : Run on every render
    useEffect(()=>{
        //logic run affter each render 
        console.log("componentDidUpdate") ; 
    })
    //cach 3 : Run on dependecy change
    useEffect(()=>{
        console.log("final point or point has change") ; 
        //logic to run when finalPoint or point changed 
    } , [finalPoint , point])
    return (
        <div>
            <h2 style={{ color: "blue" }} >My name is {name} and i'm {age} year old!</h2>
            {!destroyed &&
            <PersonPoint
                point={point}
                finalPoint={finalPoint}
                changePoint={changePoint}
                setPoint={changeFinalPoint}
            ></PersonPoint>
            }
            <button onClick={handleChangeName} className='btn btn-primary m-2'>Change Name</button>
            <button onClick={() => setAge(23)} className='btn btn-secondary m-2'>Change Age</button>
            <button onClick={()=>setDestroyed((prevState)=>!prevState)} className='btn btn-danger m-2'>Toggle Person Point </button>
        </div>

    )
}

export default Person
