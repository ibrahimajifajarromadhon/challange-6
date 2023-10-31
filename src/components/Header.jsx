import { useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from './SearchBar';
import { useSelector, useDispatch } from "react-redux";
import { logout, getMe } from "../redux/actions/authActions";

const Header = () => {
  // To set the state of the store
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Access the store
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(null, null, null));
  }, [dispatch]);

  return (
    <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: 'transparent', position: 'absolute', width: '100%', zIndex: '1' }}>
      <Container className="Header">
        <Navbar.Brand as={Link} to="/" style={{ color: "red", fontSize: "40px", fontWeight: "bold" }}>
          Movie List
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          <SearchBar/>
          <Nav>
            {isLoggedIn ? (
              <>
                <Nav.Link as={Link} to={"/users/dashboard"} style={{ color: "red", fontSize: "20px", fontWeight: "bold" }}>
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  className="Movie-logout"
                  onClick={() => {
                    dispatch(logout(navigate));
                  }}
                >
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link className="Movie-login" as={Link} to={"/login"}>
                  Login
                </Nav.Link>
                <Nav.Link className="Movie-register" as={Link} to={"/register"}>
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;