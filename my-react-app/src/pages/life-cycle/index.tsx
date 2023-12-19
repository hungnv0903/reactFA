import React from "react";

interface LifeCycleState {
    favoriteColor?:string ; 
    isShow?:boolean ; 
}

interface LifeCycleProps {
    myColor?:string ; 
}

export class LifeCycle extends React.Component<LifeCycleProps , LifeCycleState> {
    constructor(props:LifeCycleProps) {
        super(props) ; 
        console.log("1.cnostructor");

        this.state = {favoriteColor: "red" , isShow:true} ; 
    }

    static getDerivedStateFromProps(nextProps:LifeCycleProps , prevState:LifeCycleState) {
        console.log(`2.GetDerivedStateFromProps`);
        console.log(`props:${JSON.stringify(nextProps)} - state: ${JSON.stringify(prevState)}`);
        if (nextProps.myColor !== prevState.favoriteColor) {
            return {favoriteColor: nextProps.myColor} ; 
        }
        return null ; 
    } ; 

unmounting = ()=>{
    this.setState({isShow:false}) ;
}

    render(){
        console.log("3.Render");
        return (
            <>
                <h1 style={{ color:this.state.favoriteColor }}>LIfecycle method</h1>
                <h3 id ="element1">---</h3>
                <h3 id ="element2">---</h3>
                {`My favoriteCollor : ${this.state.favoriteColor}`} ;
                <hr />
                {this.state.isShow ? <Unmount/> : null}
                <button type="button" onClick={this.unmounting}>Unmount component</button>
            </>
        )
    }

    componentDidMount():void {
        console.log("4.componentDicdMouse");
        setTimeout(()=>{
            this.setState({favoriteColor:'purple'}) ; 
        },3000) ; 
    }

    //updating
    shouldComponentUpdate(
        nextProps: Readonly<LifeCycleProps>,
        nextState: Readonly<LifeCycleState>,
        nextContext: any, 
    ):boolean {
        console.log("2.shouldComponentUpdate");
        console.log("NextProps   : " , nextProps);
        console.log("NextState   : " , nextState);
        console.log("NextContext : " , nextContext);
        return true ; 
    }

    getSnapshotBeforeUpdate(prevProps:Readonly<LifeCycleProps> , prevState:Readonly<LifeCycleState>) {
        console.log("4.getSnapshotBeforUpdate");
        const h3 = document.getElementById('element1')! ; 
        console.log(h3);
        return (
            h3.innerHTML = `Befor the update, the favorite color state was ${JSON.stringify(prevState)}
            and props was ${JSON.stringify(prevProps)}`
        ) ; 
    }

    componentDidUpdate(
        prevProps:Readonly<LifeCycleProps>,
        prevState:Readonly<LifeCycleState>,
        snapshot?:any
    ):void{
        console.log("5.componentDidUpdate");
        const h3 = document.getElementById('element2')! ; 
        h3.innerHTML = `The update favorite color is ${this.state.favoriteColor}` ; 
    }
}

class Unmount extends React.Component {
    componentWillUnmount(): void {
        console.log("componentWillUnmount");
        alert("The  component to be unmount") ; 
    }

    render() {
        return <h2>Waiting Unmount</h2>
    }
}