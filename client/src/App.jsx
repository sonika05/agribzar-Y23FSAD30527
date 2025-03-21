import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Product from './components/Product'
import Search from './components/Search'
import User from './components/User'
import RecipeReviewCard from './components/RecipeReviewCard'
import ButtonAppBar from './components/ButtonAppBar'
import NotificationsSignInPageError from './components/NotificationsSignInPageError'
import TableComponent from './components/TableComponent'
import Card from './components/Card'
import Navbar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 
import Counter from './components/Counter'
import Button from './components/Button'
import MockDataProducts from './components/MockDataProducts'
import WeatherApi from './components/WeatherApi'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
     
      <Router>
      <div>
       
        <Navbar />
       
        <h1 style={{ color: "black" }}>AgriBzar</h1>
        <h6 style={{ color: "red" }}>© FSAD 2025</h6>
        <br />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/mockDataProducts" element={<MockDataProducts/>} />
          <Route path="/tableComponent" element={<TableComponent/>} />
          <Route path="/notificationsSignInPageError" element={<NotificationsSignInPageError/>} />
          <Route path="/profile" element={<User uname="Sonika" category="Student"/>} />
          <Route path="/counter" element={<Counter/>} />
          <Route path="/recipe" element={<RecipeReviewCard/>} />
        </Routes>  
        <br />
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </Router>

     <User uname="Sonika" category="Student"/>
      </div>
      <p className="read-the-docs">
      <h4> CopyRights@ fsad 2025</h4>

      </p>
    </>
  )
}

export default App