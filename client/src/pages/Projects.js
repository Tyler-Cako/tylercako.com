import Project from '../components/Project'

const Projects = () => {
    return(
        <div className="container projects" name="projects">
            <h2>Projects</h2>
            <Project 
                name="Gym Tracker" 
                img="https://images.unsplash.com/photo-1653564900892-a0aea40f75ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                description="A fullstack web/mobile application built with React Native, NodeJS, Express and MongoDB that tracks a user's workout and helps the user improve their lifts as well as display their progress."
                github="https://github.com/Tyler-Cako/gym-tracker"
            />
            <Project
                name="Tylercako.com"
                img="https://images.unsplash.com/photo-1653577755665-5732d35c169d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                description="Fullstack, responsive portfolio website that uses React for the frontend and NodeJS/Express for the contact me page as well as the project demo routing."
                github="https://github.com/Tyler-Cako/tylercako.com"
            />
        </div>
    )
}

export default Projects;