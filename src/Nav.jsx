import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Contact from "./Contact";



function Nav() {

return (
    <div>
<Navbar fixed= "top" bg="light" expand="lg">
<Navbar.Brand href="#home">
  wandering_light_photography
</Navbar.Brand> 
 <Navbar.Toggle />
 <Navbar.Collapse>
  <Navbar.Text>   
    <Contact />
  </Navbar.Text>
 </Navbar.Collapse>
</Navbar>
    </div>
)


}

export default Nav