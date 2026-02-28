import React from "react"
import './assets/stylesheets/pages.css'
import './assets/stylesheets/minipages.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import LoginSignup from "./pages/Login-Signup"
import DashboardPage from "./pages/Dashboard"

import RowComponent from "./components/RowComps"
import ButtonComp from "./components/ButtonComp"

function App() {


 /* RETURN */
    return(
      <main id="app_page_main" className="main_cont">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/:view=login?" element={<LoginSignup />} /> */}
              <Route path="/:view=login?" element={<DashboardPage />} />

            </Routes>

          </BrowserRouter>
      </main>
    )
}

export default App