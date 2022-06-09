import React from 'react'
import '../CSS/Project.css'

const Project = (props) => {
    const btnClick = () => {
        console.log('btn clicked')
    }

    return(
        <div className="project-container">
            <img className="project-img" src={props.img} />
            <div className="text-container">
                <h3>{props.name}</h3>
                <p>{props.description}</p>
                <div className="btns-container">
                    <a href={props.github} className="project-btn btn" onClick={btnClick} target="_blank" rel="noreferrer noopener">View Github</a>
                    <a href={props.demo} className="project-btn btn" onClick={btnClick} target="_blank" rel="noreferrer noopener">View Project</a>
                </div>
            </div>
        </div>
    )
}

export default Project