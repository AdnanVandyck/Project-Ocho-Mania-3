import React from "react";
import { Link } from "react-router-dom"


function Navbar() {
    const path = window.location.pathname
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        OchoMania
      </Link>
      <ul>
<CustomLink to="/bio">Bio</CustomLink>
<CustomLink to="/music">Music</CustomLink>
<CustomLink to="/performances">Performances</CustomLink>
<CustomLink to="/clients">Clients</CustomLink>
<CustomLink to="/connect">Connect</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props}) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
        <Link to={to} {...props}> 
        {children}</Link>
      </li>
    )
}

export default Navbar;
