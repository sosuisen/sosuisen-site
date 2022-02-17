import * as React from "react"
import { Link } from "gatsby"
import Footer from "./footer"

const Layout = ({ location, title, children, path }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  header = (
    <><Link className="header-link-home" to="/">
      {title}
    </Link> / {` `}<Link className="header-link-path" to={"/" + path}>
        {path}
      </Link></>
  )

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
