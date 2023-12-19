// import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import CssModule from "./pages/react-styling/css-modul/CssModule";
// import React, { ChangeEvent, useEffect, useState } from "react";
// import Dropdown from "./components/Dropdown";
// import { LifeCycle } from "./pages/life-cycle";
// import Person from "./pages/basic-hooks/Person";
// import ReactMemo from "./pages/basic-hooks/react-memo";
// import { ElectionState } from "./pages/basic-hooks/react-memo/react-memo-election/Election.model";
// import StatePicker from "./pages/basic-hooks/react-memo/react-memo-election/StatePicker";
// import Summary from "./pages/basic-hooks/react-memo/react-memo-election/summary";
import StyleCompnents from "./pages/react-styling/styled-component";
function App(){
  return (
    // <StyleCompnents></StyleCompnents>
    <CssModule></CssModule>
  )

}

// function App(){
//   // const alert = ()=>{
//   //   alert("Test props") ; 
//   // }

//   const [selectedState, setSelectedState] = useState({} as ElectionState)
//   const [elections, setElections] = useState<ElectionState[]>([])

//   useEffect(() => {
//     fetch("https://5e7db521fa19eb0016519ec1.mockapi.io/elections")
//       .then((response) => {
//         if(!response.ok) {
//           throw new Error("failed to fetch")
//         }
//         return response.json()
//       })
//       .then((data) => {
//         setElections(data)
//       })
//   }, [])

//   const charSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
//     const stateId = Number(event.target.value);
//     const selectedState =elections.find((item) => item.id === stateId);

//     setSelectedState(selectedState as ElectionState); 

//   }

//   const reRenderHandle = ()=>{
//     setSelectedState({...selectedState}) ; 
//   }
  
//   return (
//     <>
//       <StatePicker
//         options={elections}
//         selectedId={selectedState?.id}
//         onSelectState={charSelectHandler}
//       />
//       <hr />
//       <Summary state = {selectedState}></Summary>
//       <hr />
//       {selectedState.candidates && (<button onClick={reRenderHandle}>Re-select</button>)}
//     </>
//   ) 

// }
// class App extends React.Component {
//   constructor(props: any) {
//     super(props);
//   }
//   alert = ()=>{
//     alert("Test props") ; 
//   }

//   render() {
//     // const phones = ["Iphone", "Samsung", "Oppo"];
//     // const cats = ["Bella", "Meow", "Kitty", "Miu"];
//     return (
//       <>
//         <div className="row">
//             <div className="col">
//                 {/* basic react.memo */}
//                     <ReactMemo></ReactMemo>
//                 {/* basic react.memo */}

//               {/* Basic hooks  */}
//                   {/* <Person></Person> */}
//               {/* end basic hooks  */}

              
//                {/* <LifeCycle myColor = "blue" /> */}
//             </div>
//           {/* <div className="col-6">
//             <Dropdown options={phones} fn = {this.alert}>
//               Phones
//             </Dropdown>
//           </div>
//           <div className="col-6">
//             <Dropdown options={cats} fn = {this.alert} title="Choose your cat's name" />
//           </div> */}
//         </div>
//       </>
//     );
//   }
// }

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;

