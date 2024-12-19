import React from 'react'
import FooterTextHolder from './FooterTextHolder'
import RegularButton from './RegularButton'
import Socials from './Socials'

export default function Footer() {



  return (
    <footer className='white-text'>
      <div>
        <div className='footer-text-container'>
          <FooterTextHolder title='Sunday Morning' description='11:00am service - in person & online'/>
          <FooterTextHolder title='Visit Us' description='3540 peachtree run Dover, DE 19901 United States'/>
        </div>
        <div className='smaller-footer-text-container'>
        <RegularButton color='black-text' bgcolor='white-background' text='CONTACT US' width={120} height={40}/>
        <RegularButton color='black-text' bgcolor='white-background' text='WATCH LIVE' width={120} height={40}/>
        <RegularButton color='black-text' bgcolor='white-background' text='GIVE' width={120} height={40}/>
        <Socials color='white' size={30}/>
        </div>
        <div className='all-rights-reserved'><p>&copy;2024 By <b>HEIM Church</b> | All Rights Reserved</p></div>
      </div>
    </footer>
  )
}
