import { Link } from "react-router-dom";
import "../Navbar/navbar.css";
import "../Navbar/header.css";

const NavBar = () => (
  <div>
    <section>
      <div className="header">
        <h1 className="my-name">Aldo Valencia</h1>
        <div>
          <ul>
            <li>
              <Link className="nav-text" to="/react-portfolio/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="/react-portfolio/about">
                About Me
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="/react-portfolio/portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="/react-portfolio/experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="nav-text" to="/react-portfolio/contact">
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);

export default NavBar;
