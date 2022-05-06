import * as React from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"
import PaperLoader from "../components/PaperLoader";
import img from "../images/rgb-systems-3d-desk-3.png"

const IndexPage = () => {

  // console.log(data)

  return (
    <main >
      <div id="desk">
        <img id="desk-image" src={img}></img>
          <PaperLoader />
      </div>
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
