import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Form from "./form"

const home = () => {
    return (
        <div className='home'>
            <div className="navbar">
            <img src="https://ajce.acm.org/assets/LOGO23-2Riq8ZYW.png" alt=""  />
            <div className="btn">
                Login
            </div>
            </div>
            <div className="nav">
                <div className="navl">
                    <h2>ACM AJCE Events</h2>
                </div>
            </div>
            <div className="hero">
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdhbWV8ZW58MHx8MHx8fDA%3D" alt="" />
                    <h2>Game Development Worshop</h2>
                    <p>Missed our first UI/UX workshop? No worries, ACM’s 3-day UI/UX Design Workshop is back! 🚀🔥

                        Learn Figma basics and UI/UX fundamentals, perfect for beginners and those looking to enhance their skills! 🌟
                        <br></br><br></br>
                        📅 Dates: 30th Sept, 1st & 3rd Oct  <br></br>
                        🕓 Time: 4:30 PM - 6:00 PM  <br></br>
                        💻 Mode: Offline  <br></br>
                        💰 Fee: ₹100 (ACM Members) | ₹150 (Non-Members)<br></br>
                        <br></br>
                        🔗 Register now: <br></br>
                        https://bit.ly/ACM-UI-UXWORKSHOP<br></br><br></br>

                        Laptops available, or bring your own for convenience! Certificates provided to all participants. Limited seats—don’t miss out!

                        For queries:<br></br><br></br>
                        Ashish: 8921091050<br></br>
                        Joel: 8860198664</p>
                    <div className="btn">
                        <Link style={{ color: 'white' }} to="/register">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default home
