import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../assets/images/istockphoto-1352673708-612x612.jpg'

const MainHeader = () => {
  return (
    <header className='main_header' id='/'>
        <div className="container main_header_container">
            <div className="main_header_left">
                <h4>We Build The Future</h4>
                <h1>Improving People's Future Through Building</h1>
                <p>We Build And Repair people's future by developing and building. We have the best and quality experts who can turn your dream building to reality.</p>
                <Link to="/plans" className='btn lg'>Get Started</Link>
            </div>

            <div className="main_header_right">
                <div className="main_header_circle"></div>
                <div className="main_header_image">
                    <img src={Image} alt="Header_Image" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default MainHeader