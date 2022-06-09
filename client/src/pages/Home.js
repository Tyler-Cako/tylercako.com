import Navibar from '../components/NaviBar'
import '../CSS/Home.css'

const Home = () => {
    return(
        <>
            <Navibar className='nav-fixed'/>
            <div className="container name">
                <h1>Tyler Cako</h1>
                <h3>Web Developer</h3>
            </div>
        </>
    )
}

export default Home