import * as React from "react"
import Footer from '../components/footer'

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#c0c0c0",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
}

const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const aboutLinkStyle = {
  fontWeight: 300,
  fontSize: 24,
  color: "#c0c0c0",
  marginBottom: 24,
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const aboutLink = {
  text: "About",
  url: "./about",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Blog",
    url: "./blog",
    description:
      "",
    color: "#E95800",
    // badge: true
  },
]

const projects = [
  {
    text: "GitDocumentDB",
    url: "https://gitddb.com",
    description:
      "Offline-first database that syncs with Git",
    color: "#E95800",
    // badge: true
  },
  {
    text: "TreeStickies",
    url: "https://www.youtube.com/watch?v=PNBOYzWdfaE",
    description:
      "The sticky outliner",
    color: "#E95800",
    // badge: true
  },
  
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>疏水線</title>
      <h1 style={headingStyles}>
        疏水線
        <br />
        <span style={headingAccentStyles}>sosuisen</span>
      </h1>
      <ul style={listStyles}>
        <li style={aboutLinkStyle}>
          <a
            style={linkStyle}
            href={`${aboutLink.url}`}
          >
            {aboutLink.text}
          </a>
        </li>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
        <li style={{ ...listItemStyles, color: "#58C000" }}>
          <span style={{ ...linkStyle, color: "black" }}>
            My projects
          </span>
          <ul>
            {projects.map(link => (
              <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                <span>
                  <a
                    style={linkStyle}
                    href={`${link.url}`}
                  >
                    {link.text}
                  </a>
                  {link.badge && (
                    <span style={badgeStyle} aria-label="New Badge">
                      NEW!
                    </span>
                  )}
                  <p style={descriptionStyle}>{link.description}</p>
                </span>
              </li>
            ))}

          </ul>
        </li>
      </ul>
      <Footer />
    </main>
  )
}

export default IndexPage
