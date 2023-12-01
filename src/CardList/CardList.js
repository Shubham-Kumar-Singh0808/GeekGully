// CardsList.js

import React, { useState } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CardList.module.css';

const CardsList = () => {
  const [search, setSearch] = useState('');

  const cardsData = [
    {
      image: 'https://via.placeholder.com/150',
      title: 'HTML',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'CSS',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'JavaScript',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Java',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'Angular',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
    {
      image: 'https://via.placeholder.com/150',
      title: 'React',
      text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
    },
  ];

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCards = cardsData.filter((card) =>
    card.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4"> {/* Add margin-top */}
      <Form.Group className="search-container">
        <FontAwesomeIcon icon="fa-regular fa-magnifying-glass" />
        <Form.Control
          type="text"
          name="search"
          id="search"
          placeholder="Search by title"
          value={search}
          onChange={handleChange}
        />
        <Form.Control.Feedback valid>Great! Your title is available.</Form.Control.Feedback>
      </Form.Group>
      <Row>
        {filteredCards.map((card, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={4}>
            <Card className="custom-card mt-5">
              <CardImg top width="100%" src={card.image} alt="Card image cap" />
              <CardBody>
                <CardTitle tag="h5">{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardsList;
