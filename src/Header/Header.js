import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faLayerGroup, faUsers, faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import logo from "../image/Icon.jpeg"

const Nav = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  color: #f50000;
  padding: 1rem 6rem;


  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;
const StyledImage = styled.img`
  width: 100px;
  height: 50PX;
  margin-right: 10px;
  border-radius: 40%;
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 1rem;
  color: #3a282e;
  &:hover {
    color: #f50000;
  }

  a {
    color: #3a282e;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #f50000;
    }

    &:hover + svg {
      color: #f50000; // Change the icon color on hover
    }
  }
`;

const MobileNavToggle = styled.button`
  display: block;
  background-color: transparent;
  border: none;
  color: #3a282e;
  
  
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #f50000;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const DesktopNav = styled.ul`
  display: flex;
  flex-direction: row;


  @media (max-width: 767px) {
    display: none;
  }
`;

const MobileNav = styled.ul`
  position: absolute;
  top: 65%;
  left: 65%;
  display: ${({ isMobileNavOpen }) => (isMobileNavOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: start;
  margin: 0;
  padding: 0;
  background-color: #fff;
  z-index: ${({ isMobileNavOpen }) => (isMobileNavOpen ? '1' : '-1')};
  width: auto; /* Set width to auto */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle box shadow for separation */
`;

const MobileNavItem = styled.li`
  list-style: none;
  margin: 0.5rem 1rem; /* Add margin to create gaps between items */
  color: #3a282e;
  &:hover {
    color: #f50000;
  }

  a {
    color: #3a282e;
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
      color: #f50000;
    }
  }
`;

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <Nav className="">
      <StyledImage src={logo} alt="Company Logo" />
      <MobileNavToggle onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}>
        {isMobileNavOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </MobileNavToggle>
      <DesktopNav>
        <NavItem><a href="/">Posts</a></NavItem>
        <NavItem><a href="/">Authors</a></NavItem>
        <NavItem><FontAwesomeIcon icon={faRightToBracket} /> <a href="/">Login</a></NavItem>
      </DesktopNav>
      <MobileNav isMobileNavOpen={isMobileNavOpen}>
        <MobileNavItem><FontAwesomeIcon icon={faLayerGroup} /> <a href="/">Posts</a></MobileNavItem>
        <MobileNavItem><FontAwesomeIcon icon={faUsers} /> <a href="/">Authors</a></MobileNavItem>
        <MobileNavItem> <FontAwesomeIcon icon={faRightToBracket} /> <a href="/">Login</a></MobileNavItem>
      </MobileNav>
    </Nav>
  );
};


export default Header;
