import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  LogoLink,
} from "../styles/Navbar.style";
import LogoImg from "../assets/logo.png";
import { Instagram, Twitter } from "react-bootstrap-icons";
import { Button } from "react-bootstrap";
import "../styles/socials.css";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <NavbarLink to="/">Home</NavbarLink>
            <NavbarLink to="/bio">Bio</NavbarLink>
            <NavbarLink to="/music">Music</NavbarLink>
            <NavbarLink to="/performances">Performances</NavbarLink>
            <NavbarLink to="/clients">Clients</NavbarLink>
            <NavbarLink to="/connect">Connect</NavbarLink>


                <Button href="https://www.instagram.com/iamdj8pm/?igshid=OGQ5ZDc2ODk2ZA%3D%3D">
                  <Instagram color="white" size={20} className="social-icon" />
                </Button>

                <Button href="https://twitter.com/iamdj8pm?s=11&t=CP3HdW_u-PZ9rfv1ZaFryA">
                  <Twitter color="white" size={20} />
                </Button>


            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
          <LogoLink to="/">
            <Logo to="/" className="site-title" src={LogoImg}></Logo>
          </LogoLink>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
          <NavbarLinkExtended to="/bio">Bio</NavbarLinkExtended>
          <NavbarLinkExtended to="/music">Music</NavbarLinkExtended>
          <NavbarLinkExtended to="/performances">
            Performances
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/clients">Clients</NavbarLinkExtended>
          <NavbarLinkExtended to="/connect">Connect</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;

// import React from "react";
// import { Link, useMatch, useResolvedPath } from "react-router-dom"

// function Navbar() {

//   return (
//     <nav className="nav">
//       <Link to="/" className="site-title">
//         OchoMania
//       </Link>
//       <ul>
// <toNavbarLinkExtended to="/bio">Bio</toNavbarLinkExtended>
// <toNavbarLinkExtended to="/music">Music</toNavbarLinkExtended>
// <toNavbarLinkExtended to="/performances">Performances</toNavbarLinkExtended>
// <toNavbarLinkExtended to="/clients">Clients</toNavbarLinkExtended>
// <toNavbarLinkExtended to="/connect">Connect</toNavbarLinkExtended>
//       </ul>
//     </nav>
//   );
// }

// function toNavbarLinkExtended({ to, children, ...props}) {
// const resolvedPath = useResolvedPath(to)
// const isActive = useMatch({ path: resolvedPath.pathname, end: true})
//     return (
//         <li className={isActive === to ? "active" : ""}>
//         <Link to={to} {...props}>
//         {children}</Link>
//       </li>
//     )
// }

// export default Navbar;
