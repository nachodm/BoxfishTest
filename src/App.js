import './App.css'
import CustomNavbar from './CustomNavbar/CustomNavbar'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import react, {useState} from 'react'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import { lightTheme, darkTheme } from "./Theme/Theme"

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  } 
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
      <div className="App">
        <CustomNavbar />
        <button onClick={themeToggler}>Cambiar Tema</button>
        <Content />
        <Footer />
      </div>
      </>
    </ThemeProvider>
  );
}

export default App;
