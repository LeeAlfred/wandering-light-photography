import React from "react";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Accordion from 'react-bootstrap/Accordion'
import Button from 'react-bootstrap/Button';


function About() {
    return <div className="about">
<Image className="profile-img" src="https://s6.gifyu.com/images/wanderlightprofile.jpg" alt="Michelle Glover profile" fluid/>

<Accordion>
<Card border="light">
<Card.Header>
<Accordion.Toggle as={Button} variant="light" eventKey="0">
    Michelle
</Accordion.Toggle>
</Card.Header>
<Accordion.Collapse eventKey="0">
<Card.Body><p>I love the way a moment looks framed in a lens.</p>
<p>The world is full of beauty if you know where and when to look.</p>
<p>I have travelled the world and everywhere I have gone I have been inspired to capture that moment and place and the light with my camera.
</p>
<p>I'm drawn to light and perspective to movement and stillness. I feel like I found my place in the world observing and capturing the beauty of a moment to be shared 
</p>
<p>You can see more on <a href="https://instagram.com/wandering_light_photography?utm_medium=copy_link" target="_blank">my instagram Page</a>.
</p>
<p>Enjoy</p>
</Card.Body>
</Accordion.Collapse>
</Card>
</Accordion>

    </div>
}




export default About;