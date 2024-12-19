import React from 'react'
import PersonHolder from '../images/person-holder.png'

export default function Leader({picture, name, description}) {
  return (
    <div className='leader-container grey-background rounded-border'>
        <div style={{width: '40%'}}>
            <img src={PersonHolder} className='leader-img rounded-border'></img>
        </div>
        <div style={{width: '60%'}} className='leader-container-text'>
            <p><b>{name + ', '}</b>{description}</p>
        </div>
    </div>
  )
}
