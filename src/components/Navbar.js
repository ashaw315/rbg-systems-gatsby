import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"


const Navbar = () => {

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
    <div id='nav'>
      <div id='backdrop'></div>
        <img id="logo"
        src={data.strapiHeader.Logo.url}
        alt={data.strapiHeader.Logo.url}/>
        <div id='nav-links'>
            {data.strapiHeader.Navigation?.map(nav => (
            <Link className='nav-link' key={nav.Url} to={`/${nav.Url}`}>{nav.Title}</Link>
            ))}
        </div>
    </div>
  )
}


export default Navbar;
