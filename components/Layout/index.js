// import React from "react";
// import TopNavbar from "../header/topnavbar";
// import DownNavbar from "../header/DownNavbar";
// import Link from "next/link";
// import Container from "postcss/lib/container";
// import Head from "next/head";
// import { Footer } from "../Footer/Footer";
// import useStyles from "@/utils/Style";
// const Layout1 = ({ children }) => {
//   const classes = useStyles();
//   return (
//     <div>
//       <Head>
//         <title>shopme.com</title>
//       </Head>
//       <div></div>

//       <Container >
//         {children}
//       </Container>

//     </div>
//   );
// };

// export default Layout1;

import React from "react";
// If you are not using these components elsewhere in this file, you can remove these imports
// import TopNavbar from "../header/topnavbar";
// import DownNavbar from "../header/DownNavbar";
// import { Footer } from "../Footer/Footer";


import { Container, Row, Col } from "react-bootstrap";
import Head from "next/head";

const Layout1 = ({ children }) => {
  return (
   <>
   
   {children}

   </>
 
   
       
         
      
 
  );
};

export default Layout1;

 
