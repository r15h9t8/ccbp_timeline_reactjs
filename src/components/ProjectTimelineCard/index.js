// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  return (
    <div className="card-container">
      <img className="image" src={data.imageUrl} alt="project" />
      <div className="title-duration-container">
        <h1 className="title">{data.projectTitle}</h1>
        <div className="calendar-duration-container">
          <AiFillCalendar />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="project-description">{data.description}</p>
      <a className="visit-link" href={data.projectUrl}>
        {' '}
        Visit{' '}
      </a>
    </div>
  )
}

export default ProjectTimelineCard
