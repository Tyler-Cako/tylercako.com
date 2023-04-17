import Project from '../components/Project'

const Projects = () => {
    return(
        <div className="container projects" name="projects">
            <h2>Projects</h2>
            <Project 
                name="Gym Tracker" 
                img={require('../assets/gym-tracker.JPG')}
                description="A fullstack web/mobile application built with React, NodeJS, Express and MongoDB that tracks a user's exercises and helps the user improve their lifts as well as display their progress. Hosted on an AWS EC2 instance using NGINX as a reverse proxy."
                github="https://github.com/Tyler-Cako/gym-tracker"
                demo="http://gymtrack.tylercako.com"
            />
            <Project
                name="Tylercako.com"
                img={require('../assets/tylerrrcako.JPG')}
                description="Reponsive portfolio website using React and custom CSS."
                github="https://github.com/Tyler-Cako/tylercako.com"
                demo="/"
            />
        </div>
    )
}

export default Projects;