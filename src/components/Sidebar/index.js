import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoP from '../../assets/images/logo_pedrosaurio.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {
  faBehance,
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={LogoP} alt="Logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/angel-pedroza-gonzalez-633b32224/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/AngelPdrzG"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.behance.net/angelpdrzfreelancer"
        >
          <FontAwesomeIcon icon={faBehance} color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/AngelPe80755056"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
