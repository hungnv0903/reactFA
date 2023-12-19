import styled from "styled-components";

interface ButtonProp {
    primary?:boolean ; 
    type?:string ; 
}

interface StringColor {
    [key:string]:string ; 
}

const lightningColor:StringColor = {
    primary:"yellow" , 
    secondary:"black" 
}

const tomatoColor:StringColor = {
    primary:"tomato" , 
    secondary:"white" ,
}
const Color = {
    white: "#fff",
    primary:"purple" , 
    dark:"#000" , 
} ; 

interface ThemeProps {
    main?:string ; 
    color?:string ; 
}

//demo 5 

interface ThemeAdvanceProps {
    bg?:string ; 
    color?: string ; 
}
export const AdvanceButton = styled.button<ThemeAdvanceProps>`
    color: ${(props)=>props.theme.cl} ;
    border:2px solid ${(props)=>(props.theme.bg)} ; 
    background:${(props)=>(props.theme.bg)} ; 
    font-size:1rem  ; 
    margin:1rem ; 
    border-radius:3px ; 
    padding: 0,25em 1em ; 

` ; 

export const advanceTheme  = {
    clr:"red" , 
    bg:"yellow"
}

// export const invertTheme  = ({clr , bg} : ThemeAdvanceProps)=>{
//     {clr:"red", }
// }


//demo4 

//demo 3 
export const NormalButton = styled.button<ButtonProp>`
    background-color: ${(props)=>(props.type ? Color[props.type] : Color.white)} ;
    color:${(props)=>(props.primary?Color.white:Color.primary)} ; 
    font-size:1rem  ; 
    margin:1rem ; 
    border:2px solid ${(props)=>(props.type?Color[props.type]:Color.white)} ; 
    border-radius:3px ; 
    &:hover {
        color:${(props)=>(props.type ? Color[props.type] : Color.white)} ; 
        background-color:${(props)=>(props.type ? Color.white : Color.primary)} ; 
        border-color:${Color.primary} ; 
    }
`

export const BlogTitle = styled.h3`
    color:red ; 
`

//Lemon button
export const LemonButton = styled(NormalButton)`
    // overite
    background-color: ${(props)=>props.primary?lightningColor.primary:lightningColor.secondery} ; 
    color: ${(props)=>!props.primary?lightningColor.primary:lightningColor.secondery} ; 
    border:2px soild ${(props)=>!props.primary?lightningColor.primary:lightningColor.secondery} ; 
    &:hover {
        color: ${(props)=>!props.primary?lightningColor.primary:lightningColor.secondery} 
        background-color : ${(props)=>!props.primary?lightningColor.primary:lightningColor.secondery} 
        border-color: ${(props)=>!props.primary?lightningColor.primary:lightningColor.secondery} 
    } 
`

//Tomato buton 

export const TomatoButon = styled(NormalButton)`
    // overite
    background-color: ${(props)=>props.primary?tomatoColor.primary:tomatoColor.secondery} ; 
    color: ${(props)=>!props.primary?tomatoColor.primary:tomatoColor.secondery} ; 
    border:2px soild ${(props)=>!props.primary?tomatoColor.primary:tomatoColor.secondery} ; 
    &:hover {
        color: ${(props)=>!props.primary?tomatoColor.primary:tomatoColor.secondery} 
        background-color : ${(props)=>!props.primary?tomatoColor.primary:tomatoColor.secondery} 
        border-color: ${(props)=>!props.primary?tomatoColor.primary:tomatoColor.secondery} 
    } 
`