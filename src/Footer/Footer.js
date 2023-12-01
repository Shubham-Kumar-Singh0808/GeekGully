import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Footer.module.css';
import logo from '../image/Home.jpeg'


const StyledImage = styled.img`
  width: 50px;
  height: 50PX;
  margin-right: 10px;
  border-radius: 40%;
`;
const StyledForm = styled.form`
  margin: 25px 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  input {
    width: calc(100% - 20px);
    height: 40px;
    padding: 10px;
    border: 2px solid #f50000;
    outline: none;
  }

  button {
    width: calc(100% - 20px);
    height: 40px;
    background-color: #f50000;
    color: #fff;
    border: none;
    cursor: pointer;
    outline: none;
  }

  @media (min-width: 769px) {
    flex-direction: row;
    margin: 25px 10%;
    input,
    button {
      width: calc(50% - 10px);
    }
  }
`;

const Footer = () => (
  <div className={` ${styles.footer}`}>
    <Container>
      <Row>
        <Col md={4}>
          <StyledImage src={logo} alt="Company Logo" />
          <p className="mt-3">
            Complex programming concepts explained with simple terms and stunning
            visuals. Join the growing community of engineers experiencing
            accelerated learning through straight-to-the-point, bite-sized
            explanations.
          </p>
        </Col>

        <Col md={4} className="d-flex justify-content-center mt-5">
          <ul className={`list-unstyled ${styles.list}`}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/">Authors</a>
            </li>
          </ul>
        </Col>

      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={4}>
          <StyledForm action="/subscribe" method="post">
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </StyledForm>
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6} md={4} lg={4}>
          <p className={`text-center ${styles.textCenter}`}>© 2023 GeekGully.</p>
          <ul className={`list-unstyled d-flex justify-content-center ${styles.list}`}>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Footer;
