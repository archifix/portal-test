import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import { HOME_ROUTE, LOGIN_ROUTE } from "components/utils/const"
import Auth from "pages/Auth/Auth"

// import Home from "./components/Pages/home/home"
// import { SystemPage } from "./components/Pages/systems"
// import { CorruptPage } from "./components/Pages/corrupt_content/content"
// import Calendar from "components/Pages/Calendar-new/Calendar"
// import CIT from "components/Pages/cit"
import "./ui/assets/styles/App.scss"



//import AppRoutes from "./rotes";

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Home />} path={HOME_ROUTE} />
      <Route element={<Auth />} path={LOGIN_ROUTE} />
      {/* <Route element={<CIT />} path="/cit" /> */}
      {/* <Route element={<CorruptPage />} path="/corrupt_content" /> */}
      {/* <Route element={<Calendar />} path="/calendar" /> */}
    </Routes>
  )
}

export default App
