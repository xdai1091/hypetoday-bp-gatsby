import * as React from 'react'
import { container, subtitle } from './introBlock.module.css' 

const IntroBlock = ({ title, date, description, children }) => {
  return (
    <div className={container}>
      <div className={subtitle}>
        <p>{title}<br/>{date}</p>
      </div>
      {children}
    </div>
  )
}

export default IntroBlock