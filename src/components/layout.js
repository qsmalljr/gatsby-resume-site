/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //       query resumeQuery {
  //         sheet: allGoogleSheetSheet1Row {
  //           edges {
  //             node {
  //               position
  //               company
  //               location
  //               start
  //               end
  //               description
  //             }
  //           }
  //         }
  //       }
  // `)

  return (
    <>
      <Header siteTitle={"Quentin R. Small Jr."} />
      <main>{children}</main>
    </>
  )
}
//<Header siteTitle={data.sheet.edges[0].node.company} />
//style = {{
//margin: `0 auto`,
//    maxWidth: 960,
//        padding: `0 1.0875rem 1.45rem`,
//            }}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
