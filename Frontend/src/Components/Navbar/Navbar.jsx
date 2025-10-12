import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas, Dropdown } from "react-bootstrap";
import { useUser } from "../../util/UserContext";
import axios from "axios";
import "./navbar.css"; // 👈 custom styles here

const UserProfileDropdown = () => {
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const handleLogout = async () => {
    localStorage.removeItem("userInfo");
    setUser(null);
    try {
      await axios.get("/auth/logout");
      navigate("/");
    } catch (error) {
      console.error(error?.response?.data?.message || error);
    }
  };

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <div
      ref={ref}
      onClick={onClick}
      style={{ display: "flex", alignItems: "center", cursor: "pointer", gap: "0.5rem" }}
    >
      <div style={{ width: "32px", height: "32px", borderRadius: "50%", overflow: "hidden" }}>
        <img
          src={user?.picture || "/assets/images/default_avatar.png"}
          alt="User Avatar"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      <span style={{ color: "#003CFF", fontWeight: 500 }}>{user?.username}</span>
      &#x25bc;
    </div>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} />
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => navigate(`/profile/${user.username}`)}>Profile</Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const Header = () => {
  const { user } = useUser();
  const [navUser, setNavUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setNavUser(JSON.parse(localStorage.getItem("userInfo")));

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [user]);

  return (
    <Navbar
      expand="md"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand
          as={Link}
          to="/"
          className="navbar-brand-custom"
        >
          <img
            src="/assets/images/hyskill_logo.png"
            alt="HySkill Logo"
            className="brand-logo"
          />
          HySkill
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas id="offcanvasNavbar" placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="offcanvas-title">HySkill</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link as={Link} to="/" className="navlink">Home</Nav.Link>
              {navUser ? (
                <>
                  <Nav.Link as={Link} to="/discover" className="navlink">Discover</Nav.Link>
                 
                  <Nav.Link as={Link} to="/chats" className="navlink">Your Chats</Nav.Link>
                  <Nav.Link as={Dropdown}><UserProfileDropdown /></Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/about_us" className="navlink">About Us</Nav.Link>
                  <Nav.Link as={Link} to="/login" className="navlink">Login / Register</Nav.Link>
                </>
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
