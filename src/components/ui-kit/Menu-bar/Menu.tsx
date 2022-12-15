import React from "react"
import { Link } from "react-router-dom"
import Button from "ui/button/Button"

export const Menu = () => (
  <main className="container flex items-center justify-center pt-2 pb-2">
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
      <div className="dropdown relative">
        <Link to="/">
          <Button>Справочные системы</Button>
        </Link>
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
  </main>
)
