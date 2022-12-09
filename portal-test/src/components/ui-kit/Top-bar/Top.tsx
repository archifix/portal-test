import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'ui/button/Button'

export const Top = () => {
  return (
    <main className="flex items-center justify-center pt-1 pb-1">
      <nav className="flex items-center  h-4 mr-8">
          <Link to="/">
            <Button>Главная</Button>
          </Link>
          <Link to="/">
            <Button>Тех.поддержка</Button>
          </Link>
          <Link to="/">
            <Button>СЭД</Button>
          </Link>
          <Link to="/">
            <Button>Почта</Button>
          </Link>
          <div className='flex justify-center'>
            <div className='dropdown relative'>
          <Link to="/">
            <Button>Справочные системы</Button>
          </Link>
          </div>
          </div>
          

          <Link to="/">
            <Button>Справочные материалы</Button>
          </Link>
          <Link to="/">
            <Button>Образцы документов</Button>
          </Link>
          <Link to="/">
            <Button>Центр ИТ ЮО</Button>
          </Link>
          <Link to="/">
            <Button>Военный совет ЮО</Button>
          </Link>
        </nav>
        <nav className="flex items-end justify-end">
          <Link to="/login">
            <Button>Вход</Button>
          </Link>
        </nav>
        
      </main>
  )
}


