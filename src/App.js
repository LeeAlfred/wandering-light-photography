// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Heading from './Heading';
import Nav from './Nav';
import About from './About';
import Polaroid from './Polaroid';
import Footer from './Footer';
import photo from './photo';



function createPolaroid(photo){
  return <Polaroid key={photo.id} img={photo.img} caption={photo.caption} />
}


function App() {
  return (
    <div className="App">
    <Nav />
      <Container fluid>
      <Col><Heading /></Col>
      
      {photo.map(createPolaroid)}
      <Col><About /></Col>
      <Footer />


      </Container>
    </div>
  );
}

export default App;
