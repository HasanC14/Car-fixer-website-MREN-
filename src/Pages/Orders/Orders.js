import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Orders = () => {
  const { User } = useContext(AuthContext);
  const [Orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders/?email=${User.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [User?.email]);

  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
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
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
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
                  <button className="btn btn-ghost btn-xs">Full details</button>
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
