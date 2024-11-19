import React from "react";
import backgroundImage from "../../assets/ai-bg.png"; // Importing the background image
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { fadeIn } from "../../variants";

const About = () => {
  const navigate = useNavigate();
  return (
    <div
      className="relative w-full h-screen flex items-center justify-start p-6 bg-cover bg-center bg-no-repeat text-white overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="p-8 rounded-lg max-w-lg bg-opacity-75">
        {/* Heading */}
        <motion.h1
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="text-4xl font-bold underline mb-6"
        >
          About Us
        </motion.h1>

        {/* Paragraph 1 */}
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-4 text-lg lg:text-xl font-semibold leading-relaxed"
        >
          At <strong>FaceSearchAI</strong>, we revolutionize image and facial
          recognition with cutting-edge AI solutions.
        </motion.p>

        {/* Paragraph 2 */}
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-4 text-lg lg:text-xl font-semibold leading-relaxed"
        >
          Our tools deliver unmatched accuracy, simplicity, and security,
          empowering industries like security, e-commerce, healthcare, and
          entertainment.
        </motion.p>

        {/* Paragraph 3 */}
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-4 text-lg lg:text-xl font-semibold leading-relaxed"
        >
          We prioritize user-friendly designs and ethical AI practices,
          ensuring seamless integration and data privacy.
        </motion.p>

        {/* Paragraph 4 */}
        <motion.p
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="mb-4 text-lg lg:text-xl font-semibold italic leading-relaxed"
        >
          <em>FaceSearchAI – Empowering insights, one face at a time.</em>
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex gap-4 mt-6"
        >
          <Link to="Contact" smooth={true}>
            <button className="px-6 py-2 border-2 border-white bg-transparent text-white font-bold rounded-full hover:bg-white hover:text-indigo-800 transform hover:scale-105 transition-all">
              Contact Us
            </button>
          </Link>
          <Link to="Pricing" smooth={true}>
            <button className="px-6 py-2 border-2 border-white bg-transparent text-white font-bold rounded-full hover:bg-white hover:text-indigo-800 transform hover:scale-105 transition-all">
              Know More
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
