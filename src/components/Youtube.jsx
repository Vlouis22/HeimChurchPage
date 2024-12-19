import React from 'react'
import { SlSocialYoutube } from "react-icons/sl";

export default function Youtube({color, size}) {

  let fontSize = size + 'px';

  return (
    <a href='https://youtube.com' target='blank' style={{textDecoration: 'none', color: color? color :'black', margin: '7px', fontSize: size ? fontSize: null}}> 
        <SlSocialYoutube />
    </a>
  )
}
