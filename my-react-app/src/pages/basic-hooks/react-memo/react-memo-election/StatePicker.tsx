import React, { ChangeEvent } from 'react'

interface StatePickerProps {
    options:any[] ; 
    selectedId?:number ; 
    onSelectState:(event:ChangeEvent<HTMLSelectElement>)=>void ; 
}
const StatePicker = (props:StatePickerProps) => {
    const {options , selectedId , onSelectState} = props ; 

    if(options.length===0){
        return <div>No Data</div>
    }
  return (
    <div>
        <h2>SelectedState: {selectedId}</h2>
        <select name="" id=""
            onChange={onSelectState}
            value={selectedId}
            className='style.select'
        >
            {options.map((char)=>(
                <option value={char.id} key={char.id}>
                    {char.stateName}
                </option>
            ))}

        </select>
    </div>
  )
}

export default StatePicker
