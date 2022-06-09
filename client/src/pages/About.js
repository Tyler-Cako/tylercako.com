import '../CSS/About.css'
import ExperienceCard from '../components/ExperienceCard'

const About = () => {
    return(
        <div className="about">
            <div className="container">
                <h2>Experience</h2>
                <div className="flex-container">
                    <ExperienceCard 
                    img = ""
                    />
                    <ExperienceCard />
                    <ExperienceCard />
                    <ExperienceCard />
                </div>
            </div>
        </div>

    )
}

export default About