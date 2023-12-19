import React from 'react'

interface SubProp {
    name: string 
}
const MemoizedSub = ({name}:SubProp) => {
    console.log(`Rending MemoizedChildComponent : ${name}`)
    return(
        <div>{name}</div>
    )
}

export default React.memo(MemoizedSub , (prevProps , nextProps)=>{
    return prevProps.name ===nextProps.name ; 
})
