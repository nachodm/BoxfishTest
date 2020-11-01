import react, {useState} from 'react'
import NavbarLink from '../NavbarLink/NavbarLink'
import logo from './path22.png'
import text from './BOXFISHstudio.png'
import './CustomNavbar.css'

function CustomNavbar() {
  
  const[state, setState] = useState(false);
    return( 
      <nav className="header">
        <img src={logo} className="App-logo" alt="logo"/>
        
        <img src={text} className="Company-Name" alt="Boxfish Studio" />
    
        <div className="flex-grow">
            <NavbarLink
              url="#"
              text="info@boxfish.studio"
            />
            <NavbarLink
              url="#"
              text="+34 910 615212"
            />
        </div>
        <div className="hamburger-menu" onClick={() => setState(!state)}>
          <i className={state ? 'fas fa-times' : 'fas fa-bars'}></i> Menu  
        </div>
        <div className={state ? 'active' : 'collapsed'}>
            <NavbarLink
                url="#"
                text="Services"
            />
            <NavbarLink
                url="#"
                text="About us"
            />
            <NavbarLink
                url="#"
                text="Career"
            />
            <NavbarLink
                url="#"
                text="Work"
            />
        </div>
      </nav>
    )
}

export default CustomNavbar
