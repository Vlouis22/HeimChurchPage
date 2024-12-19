import React from 'react'

export default function LinkContainers({title, isIcons, icons, links}) {

    let items;

    if(isIcons){
        items = links.map((item, i) =>{
            return <div className='link-container-items'>{icons[i]} <span className='underlined'>{item}</span></div>
        }
        )
    } else {
        items = links.map((item, i) =>{
            return <div className='link-container-items'>{icons[i]} <span className='underlined padding-bottom-10'>{item}</span></div>
        }
        )
    }

  return (
    <div className='link-containers grey-background black-text rounded-border'>
        <div className='link-container-holder'>
        <h1 style={{paddingBottom: '7px', paddingTop: '8px'}}>{title}</h1>
        <div style={{textAlign: 'center', alignItems: 'center'}}>{items}</div>
        </div>
    </div>
  )
}
