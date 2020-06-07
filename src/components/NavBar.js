import React, { useState } from "react";
import styled from "styled-components";

import Text from "./Text";
import Image from "./Image";

import {
  //Collapse,
  Navbar,
  //NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  //NavbarText,
  Col,
  Container,
} from "reactstrap";

const NavbarStyled = styled(Navbar)`
  width: 100%;
  padding: 0;
  max-width: 1080px;
  /* background-color: lightgrey; */
`;

const ContainerStyled = styled(Container)`
  margin-top: 4px;
  border-top: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);

  padding: 20px 0px 20px 0px;
  display: flex;
  justify-content: center;
`;

const Test = styled.div`
  /* background-color: lightblue; */
  display: flex;
  justify-content: space-between;
`;

const Navigation = () => {
  //const [isOpen, setIsOpen] = useState(false);

  //const toggle = () => setIsOpen(!isOpen);

  return (
    <ContainerStyled fluid>
      <NavbarStyled>
        <Col md="3">
          <NavbarBrand href="/">
            <Image src="/logo/logo-wabbity-bop.svg" />
          </NavbarBrand>
        </Col>
        <Col md="8">
          <Test>
            <Nav>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <Text variant="link1" marginRight="8px">
                    BOYS
                  </Text>
                  <Image src="/icons/arrow-down.svg" width="16" />
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>Boys Option 1</DropdownItem>
                  <DropdownItem>Boys Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <Text variant="link1" marginRight="8px">
                    GIRLS
                  </Text>
                  <Image src="/icons/arrow-down.svg" width="16" />
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>Girls Option 1</DropdownItem>
                  <DropdownItem>Girls Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <Text variant="link1" marginRight="8px">
                    TODDLERS
                  </Text>
                  <Image src="/icons/arrow-down.svg" width="16" />
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem>Toddlers Option 1</DropdownItem>
                  <DropdownItem>Toddlers Option 2</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="/">
                  <Text lvariant="link1">ACCESSORIES</Text>
                </NavLink>
              </NavItem>
            </Nav>

            <Nav>
              <NavItem>
                <NavLink href="/">
                  <Image src="/icons/user.svg" width="20" />
                </NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/">
                  <Image src="/icons/shopping-bag.svg" width="20" />
                </NavLink>
              </NavItem>
            </Nav>
          </Test>
        </Col>
      </NavbarStyled>
    </ContainerStyled>
  );
};

export default Navigation;
