import * as React from 'react'
import { container, subtitle } from './introBlock.module.css' 

const IntroBlock = ({ title, date, description, fileName, children }) => {
  return (
    <div className={container}>
      <div className={subtitle}>
        <a href={fileName} style={{color:"white"}}>{title}<br/>{date}</a>
      </div>
      {children}
    </div>
  )
}

export default IntroBlock