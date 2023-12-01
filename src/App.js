import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Home from './Home/Home';
import CardsList from "./CardList/CardList";
import Footer from "./Footer/Footer"


function App() {
  return (
     <div className="App">
      
       <Container>
         <Row>
           <Col>
             <Header />
           </Col>
         </Row>
         <Row>
           <Col>
             <Home />
           </Col>
         </Row>
         <Row>
           <Col>
             <CardsList />
           </Col>
         </Row>
         <Row>
           <Col>
             <Footer />
           </Col>
         </Row>
       </Container>
     </div>
  );
 }
 
 export default App;
