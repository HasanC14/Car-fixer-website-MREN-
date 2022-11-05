import React, { useContext, useState } from "react";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Checkout = () => {
  const { title, price, _id } = useLoaderData();
  const { User } = useContext(AuthContext);
  const Navigate = useNavigate();
  const [Orders, setOrders] = useState([]);
  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const message = form.Message.value;
    const number = form.number.value;
    const email = User?.email || "Unregistered";
    const name = `${form.FirstName.value} ${form.LastName.value}`;

    const order = {
      ServiceId: _id,
      ServiceName: title,
      price,
      customer: name,
      email,
      number,
      message,
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        const newOrder = [...Orders, data];
        setOrders(newOrder);
        alert("Order Placed Successful");
        Navigate("/");
      });
    form.reset();
  };
  return (
    <form className="mb-10 mt-10" onSubmit={HandleForm}>
      <div className="mb-10">
        <p className="text-3xl">{title}</p>
        <p className="text-xl">{price}</p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="First Name"
            name="FirstName"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Last Name"
            name="LastName"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="email"
            placeholder="Email"
            name="Email"
            className="input input-bordered w-full max-w-xs"
            defaultValue={User?.email}
            readOnly
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <input
            type="number"
            name="number"
            placeholder="Phone number"
            className="input input-bordered w-full max-w-xs"
            maxLength={11}
          />
        </div>
      </div>
      <div className="mt-10 mb-5">
        <textarea
          className="textarea textarea-bordered w-full h-60"
          name="Message"
          placeholder="Message"
        ></textarea>
      </div>
      <button type="submit" className="btn">
        Place order
      </button>
    </form>
  );
};

export default Checkout;
