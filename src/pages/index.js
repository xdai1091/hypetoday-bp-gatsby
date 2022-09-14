// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import IntroBlock from '../components/introBlock'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <div style={{
      backgroundColor: 'black',
      color: "white",
      height: "100%",
      width: "100%",
      position: "relative",
      margin: '50px'
    }}>

      <Layout pageTitle="HYPETODAY" />


      <IntroBlock title="中文版本" date="2021年五月" fileName="chinese.pdf">
        Hypetoday为运动领队提供技术支持与服务 <br />一、完美的客户体验<br />二、实时的流量分析<br />三、机器学习赋能<br />四、提高品牌知名度
      </IntroBlock>

      <div style={{ marginTop: "50px" }}></div>

      <IntroBlock title="English Version" date="February,2022" fileName="english.pdf"><p> We are looking to be the Shopify of the fitness leader industry by providing: <br /> 1. Seamless Customer Experience <br /> 2. Real-time Traffic Analysis <br /> 3. Leverage Machine Learning <br /> 4. Boost Reputation and Brand Recognition</p>
      </IntroBlock>


      <div style={{
        bottom: "0",
        display: "flex",
        width: "100%",
        justifyContent: "space-around",
        position: "relative",
        fontSize: "large",
        marginTop:"200px"
      }}>
        <p>代星驰</p>
        <p>黔ICP备2021002523号</p>
        <p>xingchi.dai@guizhouxy.com</p>
      </div>
    </div>
  )
}



// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Hypetoday</title>

// Step 3: Export your component
export default IndexPage