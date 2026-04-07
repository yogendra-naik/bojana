import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p className='pforbetter'>Follow us on our social Media<br /> For Regular Updates</p>
        <div className="app-download-platforms">
            <img src={assets.insta_gram} alt="" />
            <img src={assets.fb} alt="" />
            <img src={assets.youtube} alt="" />
            <img src={assets.Linkin} alt="" />
        </div>
    </div>
  )
}

export default AppDownload