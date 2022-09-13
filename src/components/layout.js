import * as React from 'react'
import { title, subTitle } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <main className={title}>
        <h1>{pageTitle}</h1>
        <div className={subTitle}>
          <p>欢迎下载<br/>Hypetoday的商业企划案</p>
        </div>
        {children}
      </main>
    </div>
  )
}

export default Layout