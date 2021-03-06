import React, {useEffect, useState, useRef} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const Navbar = () => {
  const bgRef = useRef();
  const data = useStaticQuery(graphql`
  query nav{
    strapiHeader {
      Navigation {
        Title
        Url
      }
      Logo {
        url
      }
    }
  }
`)


  return (
    <div className="nav">
        <Link to={'/'}>
          <img className="logo"
          src={data.strapiHeader.Logo.url}
          alt={data.strapiHeader.Logo.url}
          />
        </Link>
        <Link className="site-title" to="/">RGB Systems</Link>
        <div className="nav-links">
            {data.strapiHeader.Navigation?.map(nav => (
            <Link className='nav-link' key={nav.Url} to={`/${nav.Url}`}>{nav.Title}</Link>
            ))}
        </div>
    </div>
  )
}


export default Navbar;
