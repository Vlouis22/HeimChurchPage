import React from 'react'
import { LuFacebook } from "react-icons/lu";

export default function Facebook({color, size}) {

  let fontSize = size + 'px';

  return (
    <a href='https://facebook.com' target='blank' style={{textDecoration: 'none', color: color? color :'black', margin: '7px', fontSize: size ? fontSize: null}}>
        <LuFacebook/>
    </a>
  )
}
