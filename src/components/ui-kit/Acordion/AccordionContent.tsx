import React from 'react'

export const AccordionContent = () => {
  return (
    <div className="accordion-body py-4 px-5 text-center">
            <a href="/calendar">
              <span className="text-neutral-700 hover:text-white hover:bg-red-900  font-bold rounded-full py-2 px-4">
                График ВКС
              </span>
            </a>
            <a href="/systems">
              <span className="text-neutral-700 hover:text-white hover:bg-red-900  font-bold rounded-full py-2 px-4">
                Шаблоны форм статической отчетности
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Контроль распоряжений
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Военн-научная работа
              </span>
            </a>
            <a href="/systems">
              <span className="text-center text-neutral-700 hover:text-white hover:bg-red-900 font-bold rounded-full py-2 px-4">
                Сводки МЧС ЮФО
              </span>
            </a>
          </div>
  )
}
