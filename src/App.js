import './App.css';
import {useState} from 'react';
import { Calculator } from './Components/Calculator';
import { Navbar } from './Components/Navbar';

function App() {

  const [lightTheme, setLightTheme] = useState(true);

  const changeTheme = () => setLightTheme(!lightTheme);

  return (
    <>
    <Navbar onclick={changeTheme} lightTheme={lightTheme}/>
    <Calculator lightTheme={lightTheme} />
    </>
  );
}

export default App;
