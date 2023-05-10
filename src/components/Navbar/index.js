import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const ContactButton = styled.button`
  padding: 8px 30px 8px 30px;
  color: #e3e3e3;
  font-size: 19px;
  background-color: #0f100f;
  transition: 0.2s;
  &:hover {
    background-color: #333333;
  }
`;
const ContactLink = styled(NavLink)`
  padding: 3px 20px 3px 20px;
  color: white;
  font-size: 16px;
  background-color: #0f100f;
  transition: 0.2s;
  width: fit-content;
  margin-top: 5px;
  &:hover {
    background-color: #333333;
    color: white;
  }
`;
const UnderBar = styled.nav`
  background-color: #ffffff;
  width: 100%;
  height: 45px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.17);
`;

const NavbarIndex = () => {
  const [isOpen, setIsOpen] = useState(false);
  //   const toggle = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar className="navbar navbar-expand-md bar shadow-small">
        {/* Navbar Brand mobile mode */}
        <NavbarBrand className="offset-fullname d-md-none">
          [Full Name]
        </NavbarBrand>
        {/* Socials web mode */}
        <div className="col-md-2 d-none d-md-block">
          <div className="d-inline-flex">
            <div className="social-div ms-md-4">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="https://github.com/HussAA"
              >
                <i className="bi bi-facebook" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
        </div>
        {/* Navbar Brand web mode */}
        <NavbarBrand className="offset-fullname d-none d-md-block">
          [Full Name]
        </NavbarBrand>
        {/* Socials web mode */}
        <ContactButton className="order-md-3 d-none d-md-block text-uppercase">
          Contact Us
        </ContactButton>
        {/* Socials mobile mode */}
        <div className="d-md-none d-inline-flex align-items-center">
          <div className="d-inline-flex me-2">
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="https://github.com/HussAA"
              >
                <i className="bi bi-facebook" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div className="social-div">
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
          {/* toggler mobile mode */}
          <Hamburger toggled={isOpen} toggle={setIsOpen} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-4 mt-5 mb-3 d-md-none toggler-order" navbar>
            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#About">
                About
              </NavLink>
            </NavItem>

            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Projects">
                Projects
              </NavLink>
            </NavItem>

            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Experience">
                Experience
              </NavLink>
            </NavItem>

            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Education">
                Education
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <NavLink className="navLink text-uppercase" href="#Skills">
                Skills
              </NavLink>
            </NavItem>
            <NavItem className="navItem">
              <ContactLink className="navLink text-uppercase text-nowrap" href="#Contact">
                Contact Us
              </ContactLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      {/* Under Navbar web mode */}
      <UnderBar className="d-none d-md-block">
        <Nav className="d-flex flex-row justify-content-center fs-5" navbar>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Skills
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="underbarItem text-uppercase" href="/">
              Education
            </NavLink>
          </NavItem>
        </Nav>
      </UnderBar>
    </>
  );
};

export default NavbarIndex;

/* <nav className="navbar navbar-expand-md bar shadow-small">
        <div className="d-md-block ms-3 col-xl-3">
          <div className="d-inline-flex">
            <div>
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="https://github.com/HussAA"
              >
                <i className="bi bi-facebook" />
              </a>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-linkedin" />
              </a>
            </div>
            <div style={{ marginLeft: "20px" }}>
              <a
                target="_blank"
                className="navbar-socials"
                rel="noreferrer"
                href="/"
              >
                <i className="bi bi-instagram" />
              </a>
            </div>
          </div>
        </div>

        <div className="order-md-2 col-md-5 offset-md-2 fullname-offset-xl">
          <div className="navbar-brand">[Full Name]</div>
        </div>

        <div className="order-3 d-none d-md-block me-3">
          <ContactButton>Contact Us</ContactButton>
        </div>

        <Toggler className="navbar-toggler me-2" type="button" onClick={toggle}>
          <span className="navbar-toggler-icon"></span>
        </Toggler>

        <Collapse
          className={`collapse navbar-collapse transition ${isOpen ? "show" : "collapsing"}`}
          isOpen={isOpen}>
          <ul className="navbar-nav ms-4 mt-5 d-md-none">
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Experience
              </a>
            </li>
          </ul>
        </Collapse>
      </nav> */
