import React from "react";
import { NavBar } from "../components";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./page.css";

function Home() {
  return (
    <div>
      <NavBar />
      <section className="home-section d-flex align-items-center">
        <Container fluid>
          <Row>
            <Col
              className="order-md-1  d-flex align-items-center flex-column"
              md={6}
            >
              <h1>
                Grow Your business with <strong>Techvoot</strong>
              </h1>
              <h2>We are the team of talent development</h2>
              <Button variant="outline-primary">Get start</Button>
            </Col>
            <Col md={6} className="pt-5 order-md-2">
              kkkk
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Home;
