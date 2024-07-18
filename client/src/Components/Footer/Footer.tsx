import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faLinkedin,faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons'
export default function Footer() {
  return (
    <div className='Footer'>
      <div className='FooterLogo'>
        <div className='FooterLogoMain'>
            ShopMe
        </div>
        <div className='FooterLogoSubhead'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat et cum sit facilis tempora quia accusamus id veritatis possimus. Eligendi assumenda non similique, delectus sapiente fugit. Dolor sed sequi nisi.
        </div>
      </div>
      <div className='FooterFirstRow'>
        <div className="FooterFirstRowItem"><span className="FooterFirstRowItemsp">ABOUT US</span></div>
        <div className="FooterFirstRowItem"><span className="FooterFirstRowItemsp">SERVICES</span></div>
        <div className="FooterFirstRowItem"><span className="FooterFirstRowItemsp">BLOG</span></div>
        <div className="FooterFirstRowItem"><span className="FooterFirstRowItemsp">CONTACT US</span></div>
        <div className="FooterFirstRowItem"><span className="FooterFirstRowItemsp">TERMS & CONDITIONS</span></div>
        <div className="FooterFirstRowItem"><span className="FooterFirstRowItemsp">ONLINE STORE BUILDER</span></div>
      </div>
      <div className='FooterSecondRow'>
        <div className="FooterSocial">
            <FontAwesomeIcon icon={faFacebook} size='xl' className='FooterIcon'/>
            <FontAwesomeIcon icon={faTwitter} size='xl' className='FooterIcon'/>
            <FontAwesomeIcon icon={faLinkedin} size='xl' className='FooterIcon'/>
            <FontAwesomeIcon icon={faInstagram} size='xl' className='FooterIcon' />
            <FontAwesomeIcon icon={faYoutube} size='xl' className='FooterIcon'/>
        </div>
        <div className="FooterSecondRowItem">
            <div className='FooterSecondRowHeading'>Address</div>
            <div className='FooterSecondRowCont'>145, BEML 3rd Stage, RR Nagar, Bangalore, Karnataka - 560066</div>
        </div>
        <div className="FooterSecondRowItem">
            <div className='FooterSecondRowHeading'>Email</div>
            <div className='FooterSecondRowCont'>genexis@foxena.com</div>
        </div>
        <div className="FooterSecondRowItem">
            <div className='FooterSecondRowHeading'>Phone | WhatsApp</div>
            <div className='FooterSecondRowCont'>+91 96638 53667</div>
        </div>
      </div>
    </div>
  )
}
