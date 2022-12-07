import React from "react"
import { Route, Routes } from "react-router-dom"
import "./components/styles/App.scss"
import Home from "./components/Pages/home/home"
import { SystemPage } from "./components/Pages/systems"
import { CorruptPage } from "./components/Pages/corrupt_content/content"
import Calendar from "components/Pages/Calendar-new/Calendar"
import CIT from "components/Pages/cit"


//import AppRoutes from "./rotes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<SystemPage />} path="/systems" />
      <Route element={<CIT />} path="/cit" />
      <Route element={<CorruptPage />} path="/corrupt_content" />
      <Route element={<Calendar />} path="/calendar" />
    </Routes>
  )
}

export default App
