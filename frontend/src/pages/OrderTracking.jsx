export default function OrderTracking() {
  const order = {
    id: "STN984523",
    status: "Out For Delivery",
    estimated: "Tomorrow, 10 AM - 1 PM",
    address:
      "Aryan Giri, Lohandi Mirzapur, Uttar Pradesh, India - 231001",
    items: [
      {
        id: 1,
        name: "Premium Wedding Blazer",
        quantity: 1,
        price: 4999,
        image:
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
      },
      {
        id: 2,
        name: "Luxury Kurta Set",
        quantity: 2,
        price: 2499,
        image:
          "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  };

  const timeline = [
    {
      title: "Order Placed",
      completed: true,
      time: "May 6, 9:40 AM",
    },
    {
      title: "Packed",
      completed: true,
      time: "May 6, 1:20 PM",
    },
    {
      title: "Shipped",
      completed: true,
      time: "May 7, 8:10 AM",
    },
    {
      title: "Out For Delivery",
      completed: true,
      time: "Today, 9:00 AM",
    },
    {
      title: "Delivered",
      completed: false,
      time: "Pending",
    },
  ];

  const subtotal = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black text-indigo-600">
            StitchNow
          </h1>

          <div className="flex gap-5 font-medium">
            <button>Products</button>
            <button>Orders</button>
            <button>Profile</button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div>
          <p className="text-indigo-600 font-bold uppercase tracking-[0.2em] mb-3 text-sm">
            Track Your Order
          </p>

          <h1 className="text-5xl font-black mb-4">
            Order #{order.id}
          </h1>

          <p className="text-gray-500 text-lg">
            Estimated Delivery: {order.estimated}
          </p>
        </div>

        <div className="bg-green-100 text-green-700 px-6 py-4 rounded-2xl font-black text-xl h-fit">
          {order.status}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16 grid lg:grid-cols-[1fr_400px] gap-10">
        {/* LEFT */}
        <div className="space-y-8">
          {/* TIMELINE */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-black mb-10">
              Tracking Timeline
            </h2>

            <div className="space-y-8">
              {timeline.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-6 h-6 rounded-full ${
                        step.completed
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    ></div>

                    {index !== timeline.length - 1 && (
                      <div
                        className={`w-1 h-20 ${
                          step.completed
                            ? "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black mb-2">
                      {step.title}
                    </h3>

                    <p className="text-gray-500">
                      {step.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DELIVERY ADDRESS */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-black mb-6">
              Delivery Address
            </h2>

            <div className="bg-gray-50 rounded-2xl p-5 text-gray-700 text-lg leading-relaxed">
              {order.address}
            </div>
          </div>

          {/* ITEMS */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-black">
                Ordered Items
              </h2>

              <button className="text-indigo-600 font-bold">
                Download Invoice
              </button>
            </div>

            <div className="space-y-6">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-5 bg-gray-50 rounded-3xl p-5"
                >
                  <img
                    src={item.image}
                    className="w-full md:w-40 h-44 object-cover rounded-2xl"
                  />

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-black mb-3">
                        {item.name}
                      </h3>

                      <p className="text-gray-500 mb-2">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <p className="text-indigo-600 text-3xl font-black">
                        ₹{item.price * item.quantity}
                      </p>

                      <button className="bg-black text-white px-5 py-3 rounded-2xl font-semibold hover:bg-gray-900">
                        Buy Again
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-28">
            <h2 className="text-3xl font-black mb-8">
              Order Summary
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex justify-between text-gray-600 text-lg">
                <span>Items Total</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-gray-600 text-lg">
                <span>Shipping</span>
                <span>₹99</span>
              </div>

              <div className="flex justify-between text-gray-600 text-lg">
                <span>Discount</span>
                <span className="text-green-600">-₹500</span>
              </div>

              <div className="border-t pt-5 flex justify-between text-3xl font-black">
                <span>Total</span>
                <span className="text-indigo-600">
                  ₹{subtotal - 500 + 99}
                </span>
              </div>
            </div>

            {/* HELP */}
            <div className="bg-indigo-50 rounded-2xl p-5 mb-6">
              <h3 className="font-black text-xl mb-3">
                Need Help?
              </h3>

              <p className="text-gray-600 mb-4">
                Our support team is available 24/7.
              </p>

              <button className="bg-indigo-600 text-white px-5 py-3 rounded-2xl font-semibold hover:bg-indigo-700">
                Contact Support
              </button>
            </div>

            {/* DELIVERY INFO */}
            <div className="space-y-3 text-gray-500 text-sm">
              <p>✔ Live Order Tracking</p>
              <p>✔ Secure Delivery</p>
              <p>✔ Easy Returns</p>
              <p>✔ Premium Customer Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
