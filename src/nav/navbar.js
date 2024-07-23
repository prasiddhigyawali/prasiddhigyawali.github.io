import './navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
          <Link to="/" class="site-logo">
            <img src='../../logo.png' class="site-logo-img" alt="Prasiddi Gyawali logo"/>
            Prasiddhi Gyawali
          </Link>
          <ul>
            <li>
                <Link class="nav-item" to="/experience">Experience</Link>
            </li>
            <li>
                <Link class="nav-item" to="/projects">Projects</Link>
            </li>
            <li>
                <Link class="nav-item" to="/contact">Contact</Link>
            </li>
          </ul>
    </nav>
  )
}

export default Navbar