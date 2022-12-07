import React from "react"
import moment from "moment"
import Header from "./Header"
import { CalendarGrid } from "./CalendarGrid"
import PageLayout from "components/Layout/Layout"

const Calendar = () => {
  moment.updateLocale("ru", { week: { dow: 1 } })
  const startDay = moment().startOf("month").startOf("week")
  const endDay = moment().endOf("month").endOf("week")

  const calendar = []
  const day = startDay.clone()

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone())
    day.add(1, "day")
  }

  return (
    <PageLayout>
      <div className="relative mx-72">
        <Header />
        <CalendarGrid />
      </div>
    </PageLayout>
  )
}

export default Calendar
