"use client"

const ActivityCalendar = ({ selectedDay, onDaySelect }) => {
  const days = [
    { day: "MON", date: "27" },
    { day: "TUE", date: "28" },
    { day: "WED", date: "29" },
    { day: "THU", date: "30" },
    { day: "FRI", date: "31" },
  ]

  return (
    <div className="activity-calendar">
      {days.map((day) => (
        <div
          key={day.date}
          className={`calendar-day ${selectedDay === day.date ? "selected" : ""}`}
          onClick={() => onDaySelect(day.date)}
        >
          <span className="day-name">{day.day}</span>
          <span className="day-number">{day.date}</span>
        </div>
      ))}
      <div className="calendar-toggle">
        <span>▼</span>
      </div>
    </div>
  )
}

export default ActivityCalendar
