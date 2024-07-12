// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  return (
    <div className="card-container">
      <div className="title-duration-container">
        <h1 className="title">{data.courseTitle}</h1>
        <div className="calender-duration-container">
          <AiFillClockCircle />
          <p className="duration">{data.duration}</p>
        </div>
      </div>
      <p className="project-description">{data.description}</p>
      <div className="tags-container">
        {data.tagsList.map(eachTag => (
          <p className="tag" key={eachTag.id}>
            {eachTag.name}{' '}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
