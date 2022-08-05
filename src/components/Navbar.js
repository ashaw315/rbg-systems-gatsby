import React, {useEffect, useState, useRef} from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Marquee from "react-fast-marquee";

const spanify = (text) => {
  let out = [];
  for (var i = 0; i < text.length; i++) {
    let letter = text.charAt(i);
    let the_class = '';
    if(letter === " "){
      the_class = "space-char";
    }
    out.push(<span className={the_class} key={i}>{letter}</span>)
  }
  return out;
}

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
        <Marquee
        className="marquee title-marquee"
        speed={100}
        loop={0}
        pauseOnHover={true}
        gradientWidth={0}>
        <h1 className="welcome">{spanify("RGB Systems is a software studio founded in Brooklyn, New York by Henry Van Dusen..... ")}</h1>
        </Marquee>
        <div className="nav-links">
            {data.strapiHeader.Navigation?.map(nav => (
            <Link className='nav-link' key={nav.Url} to={`/${nav.Url}`}>{nav.Title}</Link>
            ))}
        </div>
    </div>
  )
}


export default Navbar;
