import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";

// function PrintName(){
//   return <h1>Hello Ract JS</h1>
// }

// const PrintName = () => {
//   return <h1>Hello I am coming from Hyderabad</h1>
// }
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<PrintName></PrintName>)
setInterval(() =>{
  ReactDOM.render(
    <App />,
     document.getElementById('root')
   );
},1000)

