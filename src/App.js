import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
// import Row from 'Row'
import axios from 'axios';

//.............................. Function base Reactjs Hook...........................
export default function App(props){
  const [name , setName ] = useState('Trushant');
  const [surname, setSurname ] = useState('Bhangre');

  function handledChange(e){
    setName(e.target.value);
  }

  function handledChangeSurname(e){
    setSurname(e.target.value);
  }
  
  return(
    <form>
      <label>name </label>
      <input value={name}
        onChange={handledChange}
      />
      <label>surname </label>
      <input value={surname}
        onChange={handledChangeSurname}
      />
    </form>
  )
}


//............................ simple state method in class base...................................
// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: "Trush",
//       surname : "Bhangre"
//     }
//     // this.handledChange = this.handledChange.bind(this);
//   }
//   handledChange = (e)=>{
//     this.setState({
//       name: e.target.value
//     })
//   }

//   handledChangeSurname = (e) =>{
//     this.setState({
//       surname:e.target.value
//     })
//   }
// render(){
//   return (
//     <div className="App">
//         <h1> Hook In Reactjs</h1>
//       <form>
//         <label>name </label>
//         <input value={this.state.name}
//           onChange={this.handledChange}
//         />
//         <label>surname name </label>
//         <input value={this.state.surname}
//           onChange={this.handledChangeSurname}
//         />
//       </form>
        
//     </div>
//   );
// }
// }

// export default App;
