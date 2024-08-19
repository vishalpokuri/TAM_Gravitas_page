import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  width: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 0 0 15px rgba(0, 0, 139, 0.7);
  height: 50px
  padding: 5px;
  
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 10px 15px;
  border-radius: 20px;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const RegisterButton = styled(NavItem)`
  background-color: #2e73c1;
  color: #fff;
  

  &:hover {
    background-color: #1b4a7e;
  }
`;

export {NavbarContainer, NavItem, RegisterButton };
