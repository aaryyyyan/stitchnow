import { useState, useEffect } from "react";

export default function Admin() {

  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  const loadOrders = async () => {
    const res = await fetch("http://localhost:8080/api/admin/orders", {
      headers: {
        Authorization: "Bearer " + token
      }
    });

    if (!res.ok) {
      alert("Unauthorized ❌");
      return;
    }

    const data = await res.json();
    setOrders(data);
  };

  const updateStatus = async (id, status) => {
    await fetch(`http://localhost:8080/api/admin/orders/${id}?status=${status}`, {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token
      }
    });
    loadOrders();
  };

  const deleteOrder = async (id) => {
    await fetch(`http://localhost:8080/api/admin/orders/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token
      }
    });
    loadOrders();
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    loadOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="bg-indigo-900 text-white px-6 py-4 flex justify-between">
        <h2>Admin Panel</h2>
        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      </div>

      <div className="p-6">
        <h1 className="text-2xl mb-4">All Orders</h1>

        <div className="grid gap-4">
          {orders.map(o => (
            <div key={o.id} className="bg-white p-4 rounded shadow">

              <h3 className="font-bold text-lg">{o.item}</h3>
              <p>₹{o.price}</p>

              <span className={`px-2 py-1 rounded text-white text-sm ${
                o.status === "DELIVERED" ? "bg-green-500" :
                o.status === "SHIPPED" ? "bg-blue-500" :
                "bg-orange-500"
              }`}>
                {o.status}
              </span>

              <p className="mt-2 text-sm text-gray-600">
                User: {o.userEmail}
              </p>

              {/* ACTIONS */}
              <div className="mt-3 flex gap-2">

                <button
                  onClick={() => updateStatus(o.id, "SHIPPED")}
                  className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                >
                  Ship
                </button>

                <button
                  onClick={() => updateStatus(o.id, "DELIVERED")}
                  className="bg-green-500 text-white px-2 py-1 rounded text-sm"
                >
                  Deliver
                </button>

                <button
                  onClick={() => deleteOrder(o.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                >
                  Delete
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}