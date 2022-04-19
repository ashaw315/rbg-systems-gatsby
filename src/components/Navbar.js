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
    <div>
        <img 
        src={data.strapiHeader.Logo.url}
        style={{ width: 'auto', height: 300 }}/>
        {data.strapiHeader.Navigation?.map(nav => (
            <div>
              <Link to={`/${nav.Url}`}>{nav.Title}</Link>
            </div>
        ))}
    </div>
  )
}


export default Navbar;