import React from 'react';
import ContactBg from "../../assets/bg-5.png";
import ContactForm from "./ContactForm";
const Contact = () => {
  return (
    <div
        className="relative w-full min-h-screen bg-cover bg-center "
        id="Contact"
        style={{ backgroundImage: `url(${ContactBg})` }}
      >
      
       <div> <ContactForm />
       </div>
      </div>
  );
};

export default Contact;
