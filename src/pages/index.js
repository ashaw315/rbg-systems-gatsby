import React, {useEffect,useState} from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import PaperLoader from "../components/PaperLoader";
import News from "../components/RecentNews";
import img from "../images/rgb-systems-3d-desk-3.png"
import butthead from "../images/beavis.png"

const IndexPage = () => {
  const [pic,setPic] = useState(1)
  // console.log(data)
  useEffect(()=>{
    if(typeof window !== "undefined"){
      // setPic(Math.floor(Math.random()*2));
    }
  },[])
  return (
    <main>
      <div id="desk" className={`pic-${pic}`}>
        <img id="desk-image" src={pic === 0 ? butthead : img}></img>
          <PaperLoader />
      </div>
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
