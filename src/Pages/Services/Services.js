import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [Services, SetServices] = useState([]);
  const [count, SetCount] = useState([]);
  const [CurrentPage, SetCurrentPage] = useState(0); //page
  const [PerPageData, SetPerPageData] = useState(2); //size
  const PageNeeded = Math.ceil(count / PerPageData);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        let { count, services } = data;
        SetCount(count);
        SetServices(services);
      });
  }, []);
  useEffect(() => {
    fetch(
      `http://localhost:5000/services?CurrentPage=${CurrentPage}&PerPageData=${PerPageData}`
    )
      .then((res) => res.json())
      .then((data) => {
        let { count, services } = data;
        SetCount(count);
        SetServices(services);
      });
  }, [CurrentPage, PerPageData]);
  //dependency mane egula change holei effect hobe mane API e hit korbe

  return (
    <div className="mt-10 text-white">
      <div className=" text-center">
        <p className="text-5xl font-bold">Our Service Area</p>
        <p className="text-xl lg:ml-24 lg:mr-24">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don't look even slightly believable.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10">
        {Services.map((Service) => (
          <div
            className="card w-96 bg-base-100 shadow-xl image-full"
            key={Service._id}
          >
            <figure>
              <img src={Service.img} alt="Shoes" />
            </figure>
            <div className="card-body ">
              <h2 className="card-title text-white">{Service.title}</h2>
              <p className="text-white">
                {Service.description.slice(1, 100) + "..."}
              </p>
              <div className="card-actions justify-end ">
                <Link to={`/services/${Service._id}`}>
                  <button className="btn  text-white">
                    Price: ${Service.price}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="btn-group flex justify-center mt-5 mb-5">
        {[...Array(PageNeeded).keys()].map((index) => (
          <>
            <button
              key={index}
              className={`btn btn-md ${CurrentPage === index && "btn-active"}`}
              onClick={() => SetCurrentPage(index)}
            >
              {index + 1}
            </button>
          </>
        ))}
        <select
          className="text-black"
          onChange={(event) => SetPerPageData(event.target.value)}
        >
          <option value="2" selected>
            2
          </option>
          <option value="3">3</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default Services;
