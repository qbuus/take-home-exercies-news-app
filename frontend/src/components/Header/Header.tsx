import { Container, Nav, Navbar } from "react-bootstrap";
import HeaderModal from "./HeaderModal";
import LayoutToggler from "./HeaderLayoutToggler";
import HeaderBrand from "./HeaderBrand";
import SideMenu from "../SideMenu/SideMenu";

const Header = () => {
  return (
    <Navbar bg="secondary" expand="sm" sticky="top">
      <Container>
        <Nav className="my-2 my-lg-0 gap-3">
          <HeaderBrand />
          <SideMenu />
        </Nav>
        <Navbar.Toggle aria-controls="basic-nav-dropdown" />
        <Navbar.Collapse id="basic-nav-dropdown">
          <Nav className="ms-auto my-2 my-lg-0 gap-3">
            <LayoutToggler />
            <HeaderModal />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
