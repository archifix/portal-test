import React from "react"

const CalendarGrid = () => {
  const totalDays = 42
  const daysArray = [...Array(42)]
  return (
    <div className="grid grid-cols-7 grid-rows-6 gap-1 bg-stone-400">
      {daysArray.map((_, i) => (
        <div className="min-w-48 h-24 bg-red-50">
          <div className="flex ">
            <div className="">{i}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
export { CalendarGrid }
