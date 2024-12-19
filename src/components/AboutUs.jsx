import React from 'react'
import churchimage from '../images/churchphoto1.jpg'
import RegularButton from './RegularButton'


export default function AboutUs() {
  return (
    <div className='about-us-container'>
        <img className='about-us-img rounded-border' src={churchimage}></img>
        <div className='about-us-text'><p className='white-text underlined size-medium'>About Us</p></div>
    </div>
  )
}
