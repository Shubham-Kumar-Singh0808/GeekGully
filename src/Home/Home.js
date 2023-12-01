import React from 'react';
import "./Home.module.css"
import styled from 'styled-components';
import logo from "../image/Home.jpeg"


const StyledImage = styled.img`
  width: 150px;
  height: 150PX;
  margin-right: 10px;
  border-radius: 35%;
`;
const Logo = styled.h1`
  font-size: 1.5rem;
  margin: 10px 0;
`;
const Para = styled.h3`
  font-size: 0.9rem;
  margin: 10px auto; /* Center the component */
  max-width: 60%;
  padding: 0 20px; /* Add padding for better spacing */

  @media (min-width: 769px) {
    margin: 10px 20%; /* 20% margin on right and left for devices bigger than 768px */
    max-width: 60%;
  }

  @media (max-width: 768px) {
    margin: 10px 10%; /* 10% margin on right and left for devices below 768px */
    max-width: 80%;
  }
`;

const largeDeviceStyles = `
  width: 80%;
  margin-left: 10%;
  margin-right: 10%;
`;

// Media query for small devices (up to 768px)
const smallDeviceStyles = `
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
`;

// Apply media queries to the body div
const StyledBody = styled.div`
  @media (min-width: 769px) {
    ${largeDeviceStyles}
  }

  @media (max-width: 768px) {
    ${smallDeviceStyles}
  }
`;
const StyledForm = styled.form`
  margin: 25px 20%;
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
    margin: 25px 20%;
    input,
    button {
      width: calc(50% - 10px);
    }
  }
`;



const Home = () => {
  return (
    <StyledBody className="body">
      <header>
        <StyledImage src={logo} alt="Company Logo" />
      </header>
      <section className="main">
        <Logo>GeekGully</Logo>
        <Para>
          Complex programming concepts explained with simple terms and stunning visuals. Join the growing community of engineers experiencing accelerated learning through straight-to-the-point, bite-sized explanations.
        </Para>
        <StyledForm action="/subscribe" method="post">
          <input type="email" name="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </StyledForm>
      </section>
    </StyledBody>
  );
};

export default Home;
