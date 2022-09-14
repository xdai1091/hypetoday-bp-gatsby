import * as React from 'react'
import { container, subtitle, dateBlock } from './introBlock.module.css' 

const IntroBlock = ({ title, date, description, fileName, children }) => {
  return (
    <div className={container}>
      <div className={subtitle}>
        <a href={fileName} style={{color:"white"}}>{title}</a>
        <p className={dateBlock}>{date}</p>
      </div>
      <div>
      {children}
      </div>
    </div>
  )
}

export default IntroBlock