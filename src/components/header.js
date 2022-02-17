import React from 'react'

const thinHeaderStyle = {

};

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const titleLinkStyle = {
  color: "#000000",
  textDecoration: "none",
}
const headingAccentStyles = {
  color: "#c0c0c0",
}

const Header = () =>{
    return(
      <><title>疏水線</title><h1 style={thinHeaderStyle}>
        <a style={titleLinkStyle} href='./'>
          <span style={headingAccentStyles}>sosuisen</span></a>
      </h1></>
    )
}

export default Header