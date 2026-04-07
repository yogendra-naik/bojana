import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>The authentic Delicacy of India</h2>
            <p>Experience the true flavors of India with our authentic traditional food ordering online platform.
From homemade delicacies to regional specialties, every dish is crafted with love and tradition.
Discover a wide range of cuisines from every corner of the country, all in one place.</p>
            <a href="#explore-menu"><button className='buttonwl'>View Menu</button></a>
        </div>
    </div>
  )
}

export default Header