import React from "react";



function Footer() {

    const date = new Date();
    const year =date.getFullYear();

    return (
    <div className="col-heading">
<footer><p>Copyright Wandering Light Photography ⓒ{year}</p></footer>
    </div>)


}

export default Footer;
