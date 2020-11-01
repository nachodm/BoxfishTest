import './Footer.css'
import fake1 from './fake1.png'
import fake2  from './fake3.png'
import fake3 from './yk.png'
import fake4 from './Vector.png'
import fake5 from './path4.png'
import fake6 from './fake4.png'

function Footer() {
  return (
      <div className="footer-container">  
        <footer className="custom-footer">
              <div className="wrapper">
                <img src={fake1} alt="fake1"/>
              </div>
              <div className="wrapper">
                <img src={fake2} alt="fake2"/>
              </div>
              <div className="wrapper">
                <img src={fake3} alt="fake3"/>
              </div>
              <div className="wrapper">
                <img src={fake4} alt="fake4"/>
              </div>
              <div className="wrapper">
                <img src={fake5} alt="fake5"/>
              </div>
              <div className="wrapper">
                <img src={fake6} alt="fake6"/>
              </div>
        </footer>
      </div>
  );
}

export default Footer;
