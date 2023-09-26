import Navibar from '../components/NaviBar'
import IMAGE from '../assets/tyler.jpg'
import {useEffect} from 'react'
import '../CSS/Home.css'

const Home = () => {
    useEffect(() => {
        let image = new Image;
        image.src = IMAGE.src;
    })
    return(
        <div className="home">
            <Navibar className='nav-fixed'/>
            <div className="name-container">
                <div className="container name">
                    <h1>Tyler Cako</h1>
                    <h3>Fullstack Web Developer</h3>

                    <div className="button-container">
                        <a className="button" target="_blank" href="https://drive.google.com/file/d/1XrcKabV2zGvHxFipNkeJV939C5kPgqFq/view?usp=sharing">View Resume</a>
                        <a className="button" target="_blank" href="https://github.com/Tyler-Cako">View Github</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home