import React from 'react'
import EventHolder from './EventHolder';

export default function EventsContainer() {

    const eventsArray = [1,2,3,4,5,6,7,8,9,10];
    const imageAddress = 'https://wallpapers.com/images/hd/high-resolution-christmas-background-5cua70x6b1rjwro8.jpg'

    
    const events = eventsArray.map((obj => {
        return <EventHolder eventMonth={'Dec'} eventDay={`${obj}`} eventName={`Christmas event`} eventDescription={`event description placeholder`} eventBackground={imageAddress}/>
    }))

  return (
    <div className='home-page-event-container light-grey-background rounded-border'>

        {events}    


    </div>
  )
}
