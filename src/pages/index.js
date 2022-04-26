import * as React from "react"
import Navbar from "../components/Navbar"
import { graphql } from "gatsby"


const IndexPage = () => {

  // console.log(data)

  return (
    <main >
      <title>Home Page</title>
      <div>
        Hello! This is the Home Page!
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
