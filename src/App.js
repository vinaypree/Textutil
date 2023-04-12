import logo from './logo.svg';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import './App.css';
import About from './Components/About';
import React,{useState} from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      typ : type 
    })
    setTimeout(() => {
      setAlert(null);
      
    }, 2000);

  }
  const [mode, setMode] = useState('light');
  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'
      // document.body.style.color = 'white'
      showAlert("Dark MOde Has Been Enabled","success")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = 'black'
      showAlert("Light Modee Has Been Enabled","success")
    }
  }

  return (
    <>
    
<Navbar title = "TextUtils" mode = {mode} toggleMode = {toggleMode} aboutText = "About Us"/>
<TextForm/>
<Alert alert={alert}/>
<div className="container my-3">
<About/>
</div>
 
    </>
  );
}

export default App;
