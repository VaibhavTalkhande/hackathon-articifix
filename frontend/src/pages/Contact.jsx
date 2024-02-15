import React from "react";
import { useParams } from "react-router-dom";
function Contact() {
  const { name } = useParams();
    return (
      <div>
        <h2>Contact Us</h2>
        {name && <p>{name}</p>}
        <p>Reach out to us...</p>
      </div>
    );
  }
  
  export default Contact;