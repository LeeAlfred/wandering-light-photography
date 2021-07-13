import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";




function Heading() {
    return(
        <Container fluid>
<Jumbotron fluid id="home">
<h1>Wandering Light Photography</h1>
    <p>
     This is who I am.
    </p>
  
</Jumbotron>
  </Container>      
    )
}

export default Heading;