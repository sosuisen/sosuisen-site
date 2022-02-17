import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// styles
const pageStyles = {
  color: "#232129",
  padding: "0px 96px 96px 96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const listStyles = {
  
}

// markup
const AboutPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle} path="about">
    <Seo title="All posts" />
      <h2>Hidekazu Kubota</h2>
      <ul>
        <li>Ph.D. in Engineering</li>
        <li>Independent developer</li>
      </ul>
      <h3>Interests</h3>
      <ul>
        <li>Interaction Design</li>
        <li>Note-taking</li>
        <li>Personal Knowledge Management</li>
      </ul>

      <h3>Sites</h3>
      <ul>
        <li>Twitter: <a href="https://twitter.com/sosuisen_net/">https://twitter.com/sosuisen_net/</a></li>
        <li>GitHub: <a href="https://github.com/sosuisen/">https://github.com/sosuisen/</a></li>
        <li>Scrapbox: <a href="https://scrapbox.io/sosuisen/">https://scrapbox.io/sosuisen/</a></li>
        <li>Medium: <a href="https://medium.com/@hidekazu.kubota">https://medium.com/@hidekazu.kubota</a></li>
        <li>Facebook: <a href="https://www.facebook.com/hidekaz.kubota">https://www.facebook.com/hidekaz.kubota</a></li>
      </ul>

      <h3>What's 'sosuisen'?</h3>
      <p>
        A canal is called 'sosui(疏水)' in Japanese. Similarly, a line is called 'sen(線)'.<br />
        I love Lake Biwa Canal in Kyoto and its flow line. In other words,  sosui-sen is my favorite scenery.
      </p>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
