import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { Link } from "gatsby";

const ListLink = props => (
	<li style={{ display: `inline-block`, marginRight: `1rem` }}>    
		<Link to={props.to}>{props.children}</Link>  
	</li>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div style={{ listStyle: 'none', float: 'right'}}>
			<ul>
				<ListLink to="/">Home</ListLink>
				<ListLink to="/about/">About</ListLink>
				<ListLink to="/contact/">Contact</ListLink>
			</ul>
		</div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
