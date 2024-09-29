import React from 'react'
import {BrowserRouter as Router, Routes, Route,Link } from "react-router-dom"
import "./App.css"
import Home from "./home"
import Form from "./form"
import Dashboard from "./dashboard"

const App = () => {
  return (
    <div>
          <Router>
    <div className="app">

      <Routes >
        <Route path="/" exact Component={Home} />
        <Route path="register" exact Component={Form} />
        <Route path="dashboard" exact Component={Dashboard} />

      </Routes>

    </div>
  </Router>
     
    </div>
  )
}

export default App
