import Navibar from '../components/NaviBar'
import '../CSS/Home.css'

const Home = () => {
    return(
        <div className="home">
            <Navibar className='nav-fixed'/>
            <div className="name-container">
                <div className="container name">
                    <h1>Tyler Cako</h1>
                    <h3>Fullstack Web Developer</h3>

                    <div className="button-container">
                        <a className="button" target="_blank" href="https://drive.google.com/file/d/1whjSnhAt_NslghLJOtNfSAb8-co0_1TJ/view?usp=sharing">View Resume</a>
                        <a className="button" target="_blank" href="https://github.com/Tyler-Cako">View Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home