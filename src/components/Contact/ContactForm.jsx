import React from "react";
import ContactBg from "../../assets/bg-5.png";

const ContactForm = () => {
  return (
    <div className="container mx-auto h-full relative z-10"> 
    <div className="flex flex-col lg:flex-row h-full"> 

      <div className="flex-1 flex justify-start items-center pl-4 text-white mt-4">
        <div>
          <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
            Get in touch
          </h4>
          <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
          Collaborate to  <br />
          innovate
          </h2>
        </div>
      </div>

      {/* Form */}
      <form
        className="flex-1 border rounded-2xl flex flex-col gap-y-4 pb-20 p-10 items-start px-4 lg:px-4 mx-4 lg:mx-8 h-ful mt-16"
      >
        <input
          className="border-b py-3 w-full placeholder:text-white bg-transparent  focus:border-accent transition-all"
          type="text"
          placeholder="Your name"
        />
        <input
          className="border-b py-3 w-full placeholder:text-white  bg-transparent  focus:border-accent transition-all"
          type="text"
          placeholder="Your email"
        />
        <textarea
          className="border-b py-12 w-full placeholder:text-white bg-transparent focus:border-accent transition-all resize-none mb-12"
          placeholder="Your message"
        ></textarea>
        
        {/* Button */}
        <button type="submit"
         className="px-6 py-2 border-2 border-white bg-transparent text-white font-bold rounded-full hover:bg-white hover:text-indigo-800 transform hover:scale-105 transition-all"
        >
          Send message
        </button>
      </form>
    </div>
  </div>
  );
};

export default ContactForm;
