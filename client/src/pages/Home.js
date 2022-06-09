import Navibar from '../components/NaviBar'
import '../CSS/Home.css'

const Home = () => {
    return(
        <div name="home">
            <Navibar className='nav-fixed'/>
            <div className="container name">
                <h1>Tyler Cako</h1>
                <h3>Fullstack Web Developer</h3>
            </div>
        </div>
    )
}

export default Home