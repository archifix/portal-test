import React, { useState } from "react"
import Calendar from "react-calendar"
import "./calendar.scss"

export default function CalendarGfg() {
  const [value, onChange] = useState(new Date())

  return (
    <div>
      <h1 className=" text-center uppercase font-bold text-custom-dark">
        Календарь мероприятий
      </h1>
      <hr className="border-1.5 border-slate-300" />
      <Calendar className="mt-5 mb-5" onChange={onChange} value={value} />
    </div>
  )
}
