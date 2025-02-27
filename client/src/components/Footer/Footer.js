import React from "react";
import { bgDarthStripe, iconGithub, iconLinkedin } from "../../images";
import { Link } from "react-router-dom";

const Footer = () => {
  const socials = [
    { link: "https://github.com/nshaw973", icon: iconGithub },
    { link: "https://www.linkedin.com", icon: iconLinkedin },
  ];
  return (
    <>
      <footer
        className="bg-blue-600 text-white flex flex-row justify-between h-fit p-2 w-full"
        style={{
          backgroundImage: `url(${bgDarthStripe})`,
        }}
      >
        <Link to='/' className="m-auto ml-2 font-bold">Nathan Shaw - 2025</Link>
        <div className="flex flex-row ml-auto">
          {socials.map((social, index) => (
            <Link to={social.link} target="_blank" rel="noreferrer">
              <img src={social.icon} className="h-8 w-8 m-2 hover:invert" alt={index} />
            </Link>
          ))}
        </div>
        <br></br>
      </footer>
    </>
  );
};

export default Footer;
