import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom"



function Navbar() {
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
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
        <li className={isActive === to ? "active" : ""}>
        <Link to={to} {...props}> 
        {children}</Link>
      </li>
    )
}

export default Navbar;
