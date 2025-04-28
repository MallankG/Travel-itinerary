"use client"

const ActivityList = ({ activities, onActivityClick }) => {
  return (
    <div className="activity-list">
      {activities.map((activity) => (
        <div key={activity.id} className="activity-card" onClick={() => onActivityClick(activity)}>
          <div className="activity-image-container">
            <img src={activity.image || "/placeholder.svg"} alt={activity.title} className="activity-image" />
          </div>
          <div className="activity-content">
            <h3>{activity.title}</h3>
            <div className="activity-details">
              <div>Timing: {activity.timing}</div>
              <div>Duration: {activity.duration}</div>
              <div>Pick-up: {activity.pickup}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ActivityList
