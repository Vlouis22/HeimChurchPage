import React from 'react'
import RegularButton from './RegularButton'

export default function Request({title, width, height, image, buttonText}) {
  return (
    <div className='white-background rounded-border request-container grey-background' style={{width: width? width: '300px', height: height? height: '200px'}}>
        <img src={image? image : ""} style={{width: width, height: height}} className='rounded-border shrinkable half-opacity'></img>
        <div className='request-text'><p className='size-medium'>{title}</p></div>
        <div className='request-button'><RegularButton color='white-text' bgcolor='blue-background' text={buttonText} width={150} height={50}/></div>

    </div>
  )
}
