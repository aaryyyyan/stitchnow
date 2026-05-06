import { useState } from "react";

export default function SellerDashboard() {

  const [products] = useState([
    {
      id: 1,
      name: "Premium Wedding Suit",
      price: "₹5,999",
      stock: 12,
      orders: 54,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Designer Kurta",
      price: "₹2,499",
      stock: 18,
      orders: 32,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 h-full w-72 bg-black text-white p-8 hidden lg:flex flex-col">

        <h1 className="text-4xl font-black mb-14">
          StitchNow
        </h1>

        <div className="space-y-4">

          <button className="w-full text-left px-5 py-4 rounded-2xl bg-indigo-600 font-bold">
            Dashboard
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10">
            Products
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10">
            Orders
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10">
            Customers
          </button>

          <button className="w-full text-left px-5 py-4 rounded-2xl hover:bg-white/10">
            Analytics
          </button>

        </div>

      </div>

      {/* MAIN */}
      <div className="lg:ml-72">

        {/* NAVBAR */}
        <div className="bg-white px-8 py-5 flex justify-between items-center border-b">

          <div>
            <h2 className="text-3xl font-black">
              Seller Dashboard
            </h2>

            <p className="text-gray-500">
              Welcome back, Aryan 👋
            </p>
          </div>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-2xl font-bold">
            + Add Product
          </button>

        </div>

        {/* STATS */}
        <div className="p-8 grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-gray-500 mb-3">
              Total Revenue
            </p>

            <h2 className="text-5xl font-black text-indigo-600">
              ₹1.2L
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-gray-500 mb-3">
              Orders
            </p>

            <h2 className="text-5xl font-black text-green-600">
              245
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-gray-500 mb-3">
              Customers
            </p>

            <h2 className="text-5xl font-black text-pink-600">
              89
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <p className="text-gray-500 mb-3">
              Products
            </p>

            <h2 className="text-5xl font-black text-orange-500">
              34
            </h2>
          </div>

        </div>

        {/* CHART SECTION */}
        <div className="px-8 pb-8">

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <div className="flex items-center justify-between mb-10">

              <div>
                <h2 className="text-3xl font-black">
                  Sales Analytics
                </h2>

                <p className="text-gray-500">
                  Monthly seller performance
                </p>
              </div>

              <button className="bg-gray-100 px-5 py-3 rounded-2xl font-semibold">
                Last 30 Days
              </button>

            </div>

            <div className="h-[350px] flex items-end gap-5">

              {[40, 80, 60, 100, 70, 120, 90].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-indigo-500 rounded-t-3xl hover:bg-indigo-600 transition"
                  style={{ height: `${h}%` }}
                ></div>
              ))}

            </div>

          </div>

        </div>

        {/* PRODUCTS */}
        <div className="px-8 pb-12">

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-4xl font-black">
                Your Products
              </h2>

              <p className="text-gray-500">
                Manage your fashion inventory
              </p>
            </div>

            <button className="bg-black text-white px-6 py-3 rounded-2xl font-bold">
              View All
            </button>

          </div>

          <div className="grid lg:grid-cols-2 gap-8">

            {products.map(product => (

              <div
                key={product.id}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition"
              >

                <div className="grid md:grid-cols-2">

                  <img
                    src={product.image}
                    className="h-full min-h-[320px] object-cover"
                  />

                  <div className="p-8 flex flex-col justify-between">

                    <div>

                      <div className="bg-green-100 text-green-700 inline-flex px-4 py-2 rounded-full font-bold text-sm mb-5">
                        Active Product
                      </div>

                      <h3 className="text-3xl font-black mb-5 leading-tight">
                        {product.name}
                      </h3>

                      <div className="space-y-3 text-gray-600 text-lg">

                        <p>
                          Price: {product.price}
                        </p>

                        <p>
                          Stock: {product.stock}
                        </p>

                        <p>
                          Orders: {product.orders}
                        </p>

                      </div>

                    </div>

                    <div className="flex gap-4 mt-8">

                      <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition">
                        Edit
                      </button>

                      <button className="flex-1 border border-gray-300 hover:bg-gray-100 py-4 rounded-2xl font-bold transition">
                        Delete
                      </button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}