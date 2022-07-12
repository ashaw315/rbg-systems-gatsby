import React, {useEffect,useState} from "react"
import Navbar from "../components/Navbar"
import { graphql, GatsbyImage, getImage } from "gatsby"
import News from "../components/RecentNews";
import Marquee from "react-fast-marquee";

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
    <Marquee
    className="marquee"
    speed={10}
    loop={0}
    pauseOnHover={false}
    gradientWidth={0}
    >
      <h1 id="welcome">{spanify("RGB Systems/")}</h1>
    </Marquee>
    <img id="home-image" src="/IMG_3496.jpg"></img>
      <News/>
    </main>
  )
}

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
