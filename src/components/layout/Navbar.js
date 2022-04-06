import { Link } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.modules.css";
import Logo from "../../img/logo_the_best.png";

function Navbar() {
  return (
    <nav className="navbar">
      <Container>
        <Link to="/">
          <img className="imgLogo" src={Logo} alt="the_best" />
        </Link>
        <ul className="list">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/register">Cadastrar</Link>
          </li>
          <li className="item">
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
