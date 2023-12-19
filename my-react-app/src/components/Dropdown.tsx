import React from "react" ; 
interface DropdownProps {
    options: string[]  ;
    title ?:string ; 
    fn?:()=>void ; 
    children?: string ; 
}

interface StateItem {
    isShow:boolean ; 
}
class Dropdown extends React.Component<DropdownProps>{
    state = {
        isShow:false ,
    } ; 
    constructor (props:DropdownProps){
        super(props) ; 
    }
    handleClick = ()=>{
        // this.setState({isShow: !this.state.isShow}) ; 
        this.setState(((prevState:StateItem) =>({isShow: !prevState.isShow})))
    }
    render(){
        console.log(this.props);
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" onClick={this.handleClick}>
                    {this.props.title || this.props.children || "This is dropdown"}
                </button>
                <div className={`dropdown-menu ${this.state.isShow ? "show" : ""}`}>
                    {
                        this.props.options.map((opt: string ,index: number)=>(
                            <a href="#" key={index} className="dropdown-item" 
                            onClick={()=>alert(`Your selected : ${opt}`)}>{opt}</a>
                        ))
                    }
                </div>
            </div>
            
        )
    }
}

export default Dropdown ; 