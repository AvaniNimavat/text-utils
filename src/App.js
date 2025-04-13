import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
// import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const Themes = {
    
    "Default":  {
        themeName: "Default",
        foreColor: "black",
        backColor: "white"
      },
     "Red": {
        themeName: "Red",
        foreColor: "Red",
        backColor: "Pink"
      },
      "Green" :{
        themeName: "Green",
        foreColor: "Green",
        backColor: "Yellow"
      }
    
    
  }
 
  const [theme, setTheme] = useState("Default");


  setTimeout(() => {
    setAlert(null);
  }, 1500);
  const showAlert = (type, msg) => {
    setAlert({
      type: type,
      message: msg
    });

  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      const currentTheme = Themes[theme];
      document.body.style.backgroundColor = currentTheme.foreColor;;
      // document.body.style.backgroundColor = theme.lightColor;
      document.body.style.color = currentTheme.backColor;
      showAlert('success', 'Dark mode enabled');
    }
    else {
      setMode('light');
      const currentTheme = Themes[theme];
      document.body.style.backgroundColor = currentTheme.backColor;
      document.body.style.color = currentTheme.foreColor;
      showAlert('success', 'Light mode enabled');
    }
  }
  const changeTheme = (strTheme) => {
    setTheme(strTheme );
    const currentTheme = Themes[strTheme];
    if (mode === 'light') {
      document.body.style.backgroundColor = currentTheme.backColor;
      document.body.style.color = currentTheme.foreColor;
    }
    else
    {
      document.body.style.backgroundColor = currentTheme.foreColor;
      document.body.style.color = currentTheme.backColor;
    }
   
    

  }

  return (
    <>
      <Navbar title='TextUtils' about='About TextUtils' mode={mode} toggleMode={toggleMode} changeTheme={changeTheme} />
      <Alert alert={alert} />
      <div className="container">
        <Textform heading='Enter your text' mode={mode} showAlert={showAlert} />
        {/* <About/> */}
      </div>
    </>
  );

}

export default App;
