import React, {useEffect,useState} from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import News from "../components/RecentNews";
import Marquee from "react-fast-marquee";

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
      <h1 id="welcome">RGB Systems/</h1>
    </Marquee>
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
