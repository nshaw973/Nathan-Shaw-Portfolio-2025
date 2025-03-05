import React from "react";
import { Link } from "react-router-dom";
import { socials } from "../../utils/socials";
import ReCAPTCHA from 'react-google-recaptcha';

const Contact = () => {
  return (
    <div className="flex flex-grow justify-center animate-fade animate-ease-out h-fit">
      <div className="w-fit m-6 bg-white rounded-xl">
      <h1 className="border-b-2 text-left text-xl p-4">Reach me on any of these platforms!</h1>
        <ul className="flex flex-col w-full p-6">
          {socials.map((info, index) => (
            <li className="flex flex-row w-full h-6 justify-center">
              <img src={info.icon} alt={`icon-${index}`} className="h-4 mt-auto mb-auto"/>
              <h1 className="w-24 text-left">{info.title}:</h1>
              <Link to={info.link} className="underline">{info.text}</Link>
            </li>
          ))}
          <p>Please refer to my resume for my email and phone number!</p>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
