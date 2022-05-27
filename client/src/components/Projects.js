import React from 'react'
import Project from './Project'

const Projects = () => {
    return(
        <div className="container projects">
            <h2>Projects</h2>
            <Project 
                name="Gym Tracker" 
                img="https://images.unsplash.com/photo-1653564900892-a0aea40f75ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" 
                description="Magna ullamco duis enim do reprehenderit. Lorem sit commodo ex laboris qui et elit sunt cupidatat ipsum do. Labore minim id est elit elit cillum sunt occaecat nostrud."
            />
            <Project 
                name="Slack clone" 
                img="https://images.unsplash.com/photo-1653565685070-660c4cf6c68b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                description="Consequat eiusmod exercitation voluptate consequat ex occaecat. Adipisicing cupidatat ut aliquip consectetur consectetur enim pariatur non et velit. Esse cupidatat veniam ad in."
            />
            <Project
                name="Tylercako.com"
                img="https://images.unsplash.com/photo-1653577755665-5732d35c169d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                description="Fullstack portfolio website using the MERN stack"
            />
        </div>
    )
}

export default Projects;