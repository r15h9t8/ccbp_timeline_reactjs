// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  const getItem = each => {
    if (each.categoryId === 'PROJECT') {
      return <ProjectTimelineCard data={each} />
    }
    return <CourseTimelineCard data={each} />
  }

  return (
    <div className="time-line-container">
      <div className="chrono-container">
        <div className="Header-container">
          <h1 className="Heading">
            My Journey of <br />
            <span className="CCBPHeading">CCBP 4.0</span>{' '}
          </h1>
        </div>

        <Chrono
          theme={{secondary: 'white'}}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
        >
          {timelineItemsList.map(each => getItem(each))}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
