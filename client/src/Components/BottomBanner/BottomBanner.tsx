import React from 'react'
import './BottomBanner.css'
export default function BottomBanner() {
  return (
    <div className='BottomBanner'>
        <div className="BlackBanner">
            <div className="BannerSubHeading">
                Be Connected!
            </div>
            <div className="BannerHeading">
                New Stuffs Every Month  
            </div>
            <div className='BannerInput'>
                 <div className="BannerInputContainer">
                    <input type="email" className="EmailInputBottom" placeholder="Enter your email" />
                    <button className="SubmitButton">Submit</button>
                </div>
            </div>
        </div>
        <div className="GradientBanner">
            <div className="BannerSubHeading">
                What Are You Waiting for?
            </div>
            <div className="BannerHeading">
            Grow your business here
            </div>
            <div className="BannerButton">
                START NOW
            </div>
        </div>
    </div>
  )
}
