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
                                <div className="robotics" />
                                <div className="experience-card">
                                    <div>
                                        <h3>CU Robotics</h3>
                                        <h4>2022-Present</h4>
                                    </div>
                                    <p className="experience-txt">Primarily worked with testing components, including improving response time and recording power output. I also created a display interface for development using the SPI communication interface.</p>
                                    <a className="about-btn" target="_blank" href="https://www.curobotics.net/">Read more</a>
                                </div>
                            </div>
                            <div className="club">
                                <div className="blueprint" />
                                <div className="experience-card">
                                    <div>
                                        <h3>Blueprint Boulder</h3>
                                        <h4>2022-Present</h4>
                                    </div>
                                    <p className="experience-txt">Worked on the frontend dashboard for the Lafayette Empowerment Center using Tailwind CSS and Django templating.</p> 
                                    <a className="about-btn" target="_blank" href="https://blueprintboulder.org/">Read more</a>
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