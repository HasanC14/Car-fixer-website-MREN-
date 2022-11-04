import React from "react";
import { Link } from "react-router-dom";
import person from "../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div>
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse lg:ml-32 lg:mr-32">
          <img src={person} alt="" className="max-w-sm rounded-lg shadow-2xl" />
          <div className="text-center md:text-left text-white">
            <h1 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomized words which don't look even
              slightly believable.
            </p>
            <button className="btn">
              <Link to={"/appointment"}>Take Appointment</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
