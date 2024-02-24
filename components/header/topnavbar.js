// "use client";
// import * as React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsFillBagCheckFill } from "react-icons/bs";
// import { CiUser, CiShoppingCart } from "react-icons/ci";
// import Head from "next/head";
// import { Container, Row, Col } from "react-bootstrap";
// export default function TopNavbar() {
//   return (
//     <>
//       <Head>
//         <meta charSet="UTF-8"></meta>
//       </Head>
//       <div>
//         <Row>
//           <Col lg="12">
//             <Link href="/">
//               <Image src="/logo.png" height={100} width={100} />
//             </Link>
//           </Col>
//           <Col>
//             <input className="searchbar" placeholder="Search Your Product" />
//             <button className="searchBtn">Search</button>
//           </Col>
//         </Row>
//       </div>
//     </>
 
//   );
// }

"use client" 

// import * as React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { BsFillBagCheckFill } from "react-icons/bs";
// import { CiUser, CiShoppingCart } from "react-icons/ci";
// import Head from "next/head";
// import { Container, Row, Col } from "react-bootstrap";

// export default function TopNavbar() {
//   return (
//     <>
//       <Head>
//         <meta charSet="UTF-8" />
//       </Head>
//       <div>
//         <Row>
//           <Col xs={12} lg={3}> {/* For small screens (xs), the column will take the entire width (12), and for large screens (lg), it will take 3/12 of the width */}
//             <Link href="/">
//               <Image src="/logo.png" height={100} width={100} />
//             </Link>
//           </Col>
//           <Col xs={12} lg={6}> {/* For small screens (xs), the column will take the entire width (12), and for large screens (lg), it will take 6/12 of the width */}
//             <input className="searchbar" placeholder="Search Your Product" />
//             <button className="searchBtn">Search</button>
//           </Col>
//           <Col xs={12} lg={3}> {/* For small screens (xs), the column will take the entire width (12), and for large screens (lg), it will take 3/12 of the width */}
//             {/* Add your user and shopping cart icons here */}
//           </Col>
//         </Row>
//       </div>
//     </>
//   );
// }



import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillBagCheckFill } from "react-icons/bs";
import { CiUser, CiShoppingCart } from "react-icons/ci";
import Head from "next/head";
import { Container, Row, Col } from "react-bootstrap";
import { Nav  } from "react-bootstrap";
import NavLink from "react-bootstrap";
export default function TopNavbar() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
      </Head>
      <div>
        
        <Row> 
          <Col xs={12} lg={3}>
            <Link href="/">
              <Image src="/logo.png" height={100} width={100} />
            </Link>
          </Col>
          <Col xs={12} lg={6}>
            <input className="searchbar" placeholder="Search Your Product" />
            <button className="searchBtn">Search</button>
          </Col>
          <Col xs={12} lg={3}>
            {/* Add your user and shopping cart icons here */}
           </Col>
         </Row>  
      </div>
    </>
  );
}
