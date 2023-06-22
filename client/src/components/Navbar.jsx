import {HashLink }from "react-router-hash-link";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <HashLink to={"/#about"}> about </HashLink>

      <HashLink to={"/#blog"}> blog </HashLink>
    </nav>
  );
}
