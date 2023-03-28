import '../CSS/ExperienceCard.css'

const ExperienceCard = (props) => {
    return(
        <div className="card">
            <img src={props.img} className="img"/>
            <h3 className="text">{props.text}</h3>
        </div>
    )
}

export default ExperienceCard