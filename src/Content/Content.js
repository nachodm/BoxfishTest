import bike from './HEROIMG.png'
import './Content.css'

function Content() {
    return (
        <div className="container">
            <div className="split">
                <div className="centered">
                    <h1 className="title" >Engineering with <span>love</span> and <span>passion</span></h1>
                    <p>High-quality solutions for emerging technologies and industries.</p>
                </div>
            </div>
            <div class="split bottom">
                <div class="centered">
                <img src={bike} alt="bike"/>
                </div>
            </div> 
        </div>
    )
}

export default Content;