import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Col, Row } from "reactstrap";
import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto">
            <a
              href="#"
              className="header__link header__title"
              target="_blank"
              rel="noopener noreferrer"
            >
              THIET
            </a>
          </Col>
          <Col xs="auto">
            <NavLink
              exact
              className="hearder__link"
              activeClassName="header__link--active"
              to="/photos"
            >
              Photos
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
