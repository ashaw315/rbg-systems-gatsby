import React, {useEffect,useState} from "react"
import Navbar from "../components/Navbar"
import { graphql, GatsbyImage, getImage } from "gatsby"
import News from "../components/RecentNews";
import Marquee from "react-fast-marquee";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Info from "../components/Info";

const spanify = (text) => {
  let out = [];
  for (var i = 0; i < text.length; i++) {
    out.push(<span key={i}>{text.charAt(i)}</span>)
  }
  return out;
}

const IndexPage = () => {
  const [pic,setPic] = useState(1)
  return (
    <main>
      <Services/>
      <Projects filter={(item,i)=> i<6 }/>
      <News/>
      <Info/>
    </main>
  )
}

//TODO tags with spaces

// export const data = graphql`
//   query headQuery {
//     strapiHeader {
//       Navigation {
//         Title
//         Url
//       }
//       Logo {
//         url
//       }
//     }
//   }
// `

export default IndexPage
