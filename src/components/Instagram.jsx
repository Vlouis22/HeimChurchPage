import React from 'react'
import { FaInstagram } from "react-icons/fa6";


export default function Instagram({color, size}) {

  let fontSize = size + 'px';

  return (
    <a href='https://instagram.com' target='blank' style={{textDecoration: 'none', color: color? color :'black', margin: '7px', fontSize: size ? fontSize: null}}>
        <FaInstagram/>
    </a>
  )
}
