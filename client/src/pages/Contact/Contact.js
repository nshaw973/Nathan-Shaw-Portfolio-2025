import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      link: "mailto:nshaw973@gmail.com",
      text: "nshaw973@gmail.com",
      title: "Email",
    },
    {
      link: "https://www.linkedin.com/nshaw973",
      text: "nshaw973",
      title: "LinkedIn",
    },
    {
      link: "https://www.github.com/nshaw973",
      text: "nshaw973",
      title: "Github",
    },
  ];
  return (
    <div className="flex flex-grow justify-center animate-fade animate-ease-out">
      <div className="w-9/12 m-6 bg-white rounded-xl">
        <h1 className="font-roboto text-2xl border-b-2 p-6">
          Feel free to reach me out in any of these platforms!
        </h1>
        <ul className="flex flex-col w-full pt-6">
          {contactInfo.map((info, index) => (
            <li className="flex flex-row w-1/2 pl-6 justify-between">
              <h1>{info.title}:</h1>
              <Link to={info.link}>{info.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
