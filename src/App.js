import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
// import Row from 'Row'
import axios from 'axios';

//.............................. Function base Reactjs Hook...........................

export default function App(props){
  const name = useFormInput('trush');
  const surname = useFormInput('bhangre');
  const width = useWindowWidth();
  useDocumentTitle(name.value +'' + surname.value);

  return(
  <div className="App">
  <h1>React Hook in Function Base</h1>

    <form>
      <label>name </label>
      <input {...name}
      />
      <label>surname </label>
      <input {...surname}
      />
      <label>width </label>
      <input value={width}
      />
    </form>
  </div>
  )

  function useFormInput(initialValue){
    const[value, setValue] = useState(initialValue);
    function handledChange(e){
      setValue(e.target.value);
    }
    return{
      value,
      onChange: handledChange
    };
  }

  function useDocumentTitle(title){
    useEffect(()=>{
      document.title = title ;
    })
  }

  function useWindowWidth(){
    const [width, setWidth] = useState(window.innerWidth);
     useEffect(()=>{
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);    
      return()=>{
        window.removeEventListener('resize', handleResize);
      }
    })
    return width;
  }
}


//............................ simple state method in class base...................................

// class App extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       name: "Trush",
//       surname : "Bhangre",
//       width: window.innerWidth,
//     }
//     // this.handledChange = this.handledChange.bind(this);
//     this.handledChangeWidth = this.handledChangeWidth.bind(this);
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

//   handledChangeWidth = (e) =>{
//     this.setState({
//       width: window.innerWidth
//     })
//   }

//   componentDidMount() {
//     document.title = this.state.name + '' + this.state.surname + '';
//     window.addEventListener('resize', this.handledChangeWidth);
//   }

//   componentDidUpdate() {
//     document.title = this.state.name + '' + this.state.surname + '';
//   }
  
// render(){
//   return (
//     <div className="App">
//         <h1>Simple state management</h1>
//       <form>
//         <label>name </label>
//         <input value={this.state.name}
//           onChange={this.handledChange}
//         />
//         <label>surname name </label>
//         <input value={this.state.surname}
//           onChange={this.handledChangeSurname}
//         />
//         <label>width </label>
//         <input value={this.state.width}
//           onChange={this.handledChangeWidth}
//         />
//       </form>
        
//     </div>
//   );
// }
// }

// export default App;
