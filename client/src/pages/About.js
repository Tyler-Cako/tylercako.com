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
        <>
            <div className="curve" />   
            <div className="about" name="about">
                <div className="container">
                    <h2>Experience</h2>
                    <div className="flex-container">
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
                        <div className="clubs">
                            <div className="club">
                                <div className="test-img" />
                                <div className="experience-card">
                                    <div>
                                        <h3>CU Robotics</h3>
                                        <h4>2022-Present</h4>
                                    </div>
                                    <p className="experience-txt">Primarily worked with testing components for resposne times and power outputs. Built a display system that shows useful robot data using the SPI communication interface</p>
                                    <a href="https://www.curobotics.net/">Read more.</a>
                                </div>
                            </div>
                            <div className="club">
                                <div className="test-img" />
                                <div className="experience-card">
                                    <div>
                                        <h3>Blueprint Boulder</h3>
                                        <h4>2022-Present</h4>
                                    </div>
                                    <p className="experience-txt">Software development for social good. Worked with Django and developed the frontend for the Lafayette Empowerment Center dashboard/database.</p> 
                                    <a href="https://blueprintboulder.org/">Read more.</a>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>

    )
}

export default About