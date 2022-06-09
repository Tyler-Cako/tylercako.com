import '../CSS/About.css'
import ExperienceCard from '../components/ExperienceCard'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import NODE from '../assets/node.png'
import REACT from '../assets/react.png'
import MONGO from '../assets/mongo.png'

const About = () => {
    return(
        <div className="about" name="about">
            <div className="container">
                <h2>Experience</h2>
                <div className="flex-container">
                    <ExperienceCard 
                    img={HTML}
                    text="HTML"
                    />
                    <ExperienceCard 
                    img={CSS}
                    text="CSS"
                    />
                    <ExperienceCard 
                    img={JS}
                    text="Javascript"
                    />
                    <ExperienceCard 
                    img={REACT}
                    text="React"
                    />
                    <ExperienceCard 
                    img={NODE}
                    text="Node.JS"
                    />
                    <ExperienceCard 
                    img={MONGO}
                    text="MongoDB"
                    />
                </div>
            </div>
        </div>

    )
}

export default About