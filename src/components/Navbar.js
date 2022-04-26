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

    console.log(data)
    console.log(data.strapiHeader.Navigation)

  return (
    <div id='nav'>
      <div id='backdrop'></div>
        <img  
        src={data.strapiHeader.Logo.url}
        alt={data.strapiHeader.Logo.url}
        style={{ width: 'auto', height: 300 }}/>
        <div id='nav-links'>
            {data.strapiHeader.Navigation?.map(nav => (
            <Link className='nav-link' key={nav.Url} to={`/${nav.Url}`}>{nav.Title}</Link>
            ))}
        </div>
    </div>
  )
}


export default Navbar;