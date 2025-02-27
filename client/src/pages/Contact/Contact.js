import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="flex flex-grow justify-center">
      <div className="w-9/12 m-6 bg-white rounded-xl">
      <h1 className="font-roboto text-2xl border-b-2 p-6">Feel free to reach me out in any of these platforms!</h1>
        <ul className="flex flex-col w-full pt-6">
          <li className="flex flex-row w-1/2 pl-6 justify-between">
            <h1>Email:</h1>
            <Link to="mailto:nshaw973@gmail.com">nshaw973@gmail.com</Link>
          </li>
          <li className="flex flex-row w-1/2 pl-6 justify-between">
            <h1>LinkedIn:</h1>
            <Link to="https://www.linkedin.com/nshaw973">nshaw973</Link>
          </li>
          <li className="flex flex-row w-1/2 pl-6 justify-between">
            <h1>Github:</h1>
            <Link to="https://www.github.com/nshaw973">nshaw973</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
