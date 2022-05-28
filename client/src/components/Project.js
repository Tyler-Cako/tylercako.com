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
                    <button href={props.github} className="project-btn" onClick={btnClick}> View Github</button>
                    <button href={props.demo} className="project-btn" onClick={btnClick}>View Project</button>
                </div>
            </div>
        </div>
    )
}

export default Project