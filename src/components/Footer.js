import React from "react";
import styled from "styled-components";

import Text from "./Text";

import {
  Col,
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const ContainerStyled = styled(CardFooter)`
  /* padding: 20px 0px 20px 0px; */
  display: flex;
  justify-content: center;
  border: none;
  width: 100%;
  background-color: #f6f4fe;
`;

const FooterElements = styled.div`
  padding: 0;
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: space-between;

  /* background-color: black; */
`;

const Link = styled.a`
  :hover {
    text-decoration: none;
    cursor: pointer;
    opacity: 87%;
  }
`;

const Footer = () => {
  return (
    <ContainerStyled>
      <FooterElements>
        <Col sm="6" style={{ display: "flex" }}>
          <Text variant="body2">
            Copyright © 2018 Wabbity Bop. All Rights Reserved
          </Text>
        </Col>

        <Col
          sm="6"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Link href="">
            <Text variant="link4">About</Text>
          </Link>
          <Link href="">
            <Text variant="link4">Privacy Policy</Text>
          </Link>
          <Link href="">
            <Text variant="link4">Members Terms &amp; Conditions</Text>
          </Link>
          <Link href="">
            <Text variant="link4">Personal Data Protection</Text>
          </Link>
        </Col>
      </FooterElements>
    </ContainerStyled>
  );
};

export default Footer;
