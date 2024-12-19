import React from 'react'

export default function FooterTextHolder({title, description}) {
  return (
    <div className='footer-text-holder'>
        <div className='roboto-bold' style={{fontSize: '20px'}}>{title}</div>
        <div className='roboto-regular' style={{fontSize: '15px', paddingBottom: '8px'}}>{description}</div>
    </div>
  )
}
