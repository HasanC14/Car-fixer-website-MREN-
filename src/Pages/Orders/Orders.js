import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Orders = () => {
  const { User, LogOut } = useContext(AuthContext);
  const [Orders, setOrders] = useState([]);
  console.log(Orders.status);
  useEffect(() => {
    fetch(`http://localhost:5000/orders/?email=${User.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          LogOut();
        }
        return res.json();
      })
      .then((data) => setOrders(data));
  }, [User?.email]);

  const HandleDelete = (id) => {
    const agree = window.confirm(`Delete ${id}`);
    if (agree) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("User Deleted Successfully");
            const RemainingOrders = Orders.filter((odr) => odr._id !== id);
            setOrders(RemainingOrders);
          }
        });
    }
  };
  const HandleStatus = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const RemainingOrders = Orders.filter((odr) => odr._id !== id);
          const Approving = Orders.find((odr) => odr._id === id);
          console.log(Approving);
          Approving.status = "Approved";
          const newOrders = [Approving, ...RemainingOrders];
          setOrders(newOrders);
        }
      });
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Service</th>
              <th>Price</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          {Orders.map((order) => (
            <tbody key={order._id}>
              <tr>
                <th>
                  <button
                    className="btn"
                    onClick={() => HandleDelete(order._id)}
                  >
                    Remove
                  </button>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold">{order.ServiceName}</div>
                    </div>
                  </div>
                </td>
                <td>{order.price}$</td>
                <td>{order.number}</td>
                <th>
                  <button
                    className="btn btn-ghost btn-xs"
                    onClick={() => HandleStatus(order._id)}
                  >
                    {order.status ? order.status : "Pending"}
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Orders;
