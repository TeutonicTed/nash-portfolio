import { useState, useEffect, } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Footer, Header } from './components'

import AboutPage from './pages/AboutPage'
import PortfolioPage from './pages/PortfolioPage'
import ContactPage from './pages/ContactPage'
import ResumePage from './pages/ResumePage'

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../src/App.css"


function App() {
  const sitename = "Nash Peterson"

  const [ userName, setUserName ] = useState("")
  const [ userEmail, setUserEmail ] = useState("")
  const [ userMessage, setUserMessage ] = useState("")

  async function getUserData(){
   
    setUserName(userName)
    setUserEmail(userEmail)
    setUserMessage(userMessage)
  }

  useEffect ( () => {
    getUserData()
  },[])

 
  return (
    <BrowserRouter>

    <Header sitename={sitename} />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12" >
      <Routes>
        <Route path = "/" element={<AboutPage/>} />
        <Route path = "/about" element={<AboutPage />} />
        <Route path = "/portfolio" element={<PortfolioPage />} />
        <Route path = "/contact" element={<ContactPage userName={userName} userEmail={userEmail} userMessage={userMessage}/>} />
        <Route path = "/resume" element={<ResumePage />} />
      </Routes>

            </div>
          </div>
        </div>
      

        <Footer />
    </BrowserRouter>
  )
}

export default App
