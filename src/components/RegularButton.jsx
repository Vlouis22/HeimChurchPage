import React from 'react'

export default function RegularButton({text, color, bgcolor, width, height}) {

    var css = `${color} ${bgcolor} rounded-border underlined centered-text`
    var paragraphSize = Number (width / 7.5);
    var paragraphcss = `centered-text roboto-bold`
    

  return (
    <div className={css} style={{width: width, height: height}}>
        <div className={paragraphcss} style={{fontSize: paragraphSize}}>{text}</div>
    </div>
  )
}
