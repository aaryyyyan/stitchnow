import { useState, useEffect } from "react";

export default function Dashboard() {

  const [orders, setOrders] = useState([]);
  const [item, setItem] = useState("");
  const [price, setPrice] = useState("");

  const token = localStorage.getItem("token");

  // 🔥 LOAD ORDERS
  const loadOrders = async () => {
    const res = await fetch("http://localhost:8080/api/orders", {
      headers: { "Authorization": "Bearer " + token }
    });

    const data = await res.json();
    setOrders(data);
  };

  // 🔥 CREATE ORDER
  const createOrder = async () => {
    if (!item || !price) {
      alert("Enter item & price");
      return;
    }

    await fetch("https://stitchnow.onrender.com/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify({ item, price })
    });

    setItem("");
    setPrice("");
    loadOrders();
  };

  // 🔥 AUTO LOAD
  useEffect(() => {
    loadOrders();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔥 NAVBAR */}
      <div className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">StitchNow</h2>
        <button
          onClick={logout}
          className="bg-red-500 px-4 py-1 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="p-6">

        <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

        {/* 🔥 CREATE ORDER */}
        <div className="bg-white p-5 rounded-lg shadow mb-6">
          <h3 className="text-lg font-semibold mb-3">Create Order</h3>

          <div className="flex gap-3 flex-wrap">
            <input
              value={item}
              onChange={e => setItem(e.target.value)}
              placeholder="Item"
              className="border p-2 rounded w-40"
            />

            <input
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="Price"
              className="border p-2 rounded w-40"
            />

            <button
              onClick={createOrder}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Add
            </button>
          </div>
        </div>

        {/* 🔥 ORDER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {orders.map(o => (
            <div
              key={o.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold">{o.item}</h3>
              <p className="text-gray-600">₹{o.price}</p>

              <p className={
                o.status === "DELIVERED"
                  ? "text-green-600 font-semibold"
                  : "text-orange-500 font-semibold"
              }>
                {o.status}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}