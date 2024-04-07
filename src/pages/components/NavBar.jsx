import { Navbar, Nav } from "rsuite";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Navbar
      appearance="subtle"
      style={{ color: "#fff", backgroundColor: "#242424" }}
    >
      <Navbar.Brand href="#">RSUITE</Navbar.Brand>
      <Nav>
        <Nav.Item as={Link} to="/">
          Home
        </Nav.Item>
        <Nav.Item as={Link} to="auth/sign-up">
          Sign-Up
        </Nav.Item>
        <Nav.Item as={Link} to="/auth/login">
          LogIn
        </Nav.Item>
        <Nav.Item as={Link} to="/inputData">
          InputData
        </Nav.Item>
        <Nav.Item as={Link} to="/users-list">
          UsersList
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
