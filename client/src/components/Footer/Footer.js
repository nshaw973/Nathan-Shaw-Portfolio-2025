import React from "react";
import { bgDarthStripe } from "../../images";

const Footer = () => {
  return (
    <>
      <footer
        className="bg-blue-600 text-white flex flex-row justify-between"
        style={{
          backgroundImage: `url(${bgDarthStripe})`,
        }}
      >
        <div>
          <h1>Socials:</h1>
          <ul>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
        </div>
        <br></br>
      </footer>
    </>
  );
};

export default Footer;
