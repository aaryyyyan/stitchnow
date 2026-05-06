import { useState } from "react";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  const cartItems = [
    {
      id: 1,
      name: "Premium Wedding Blazer",
      price: 4999,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Luxury Kurta Set",
      price: 2499,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shipping = 99;
  const total = subtotal + shipping;

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
            <button>Cart</button>
            <button>Wishlist</button>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_420px] gap-10">
        {/* LEFT */}
        <div className="space-y-8">
          {/* ADDRESS */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-black mb-8">
              Delivery Address
            </h2>

            <div className="grid md:grid-cols-2 gap-5">
              <input
                placeholder="First Name"
                className="border rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="Last Name"
                className="border rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="Email"
                className="border rounded-2xl px-5 py-4 outline-none md:col-span-2"
              />

              <input
                placeholder="Phone Number"
                className="border rounded-2xl px-5 py-4 outline-none md:col-span-2"
              />

              <textarea
                placeholder="Full Address"
                rows="4"
                className="border rounded-2xl px-5 py-4 outline-none md:col-span-2"
              ></textarea>

              <input
                placeholder="City"
                className="border rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="State"
                className="border rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="ZIP Code"
                className="border rounded-2xl px-5 py-4 outline-none"
              />

              <input
                placeholder="Country"
                className="border rounded-2xl px-5 py-4 outline-none"
              />
            </div>
          </div>

          {/* PAYMENT */}
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-black mb-8">
              Payment Method
            </h2>

            <div className="flex flex-col gap-5">
              <label
                className={`border-2 rounded-2xl p-5 flex items-center justify-between cursor-pointer transition ${
                  paymentMethod === "cod"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200"
                }`}
              >
                <div>
                  <h3 className="font-bold text-lg">
                    Cash On Delivery
                  </h3>

                  <p className="text-gray-500">
                    Pay after receiving your order.
                  </p>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
              </label>

              <label
                className={`border-2 rounded-2xl p-5 flex items-center justify-between cursor-pointer transition ${
                  paymentMethod === "card"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200"
                }`}
              >
                <div>
                  <h3 className="font-bold text-lg">
                    Credit / Debit Card
                  </h3>

                  <p className="text-gray-500">
                    Secure online payment.
                  </p>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
              </label>

              <label
                className={`border-2 rounded-2xl p-5 flex items-center justify-between cursor-pointer transition ${
                  paymentMethod === "upi"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200"
                }`}
              >
                <div>
                  <h3 className="font-bold text-lg">
                    UPI Payment
                  </h3>

                  <p className="text-gray-500">
                    Google Pay, PhonePe, Paytm.
                  </p>
                </div>

                <input
                  type="radio"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
              </label>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-28">
            <h2 className="text-3xl font-black mb-8">
              Order Summary
            </h2>

            {/* ITEMS */}
            <div className="space-y-5 mb-8 max-h-[400px] overflow-auto pr-2">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 items-center"
                >
                  <img
                    src={item.image}
                    className="w-24 h-24 object-cover rounded-2xl"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-snug">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-black text-indigo-600">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            {/* COUPON */}
            <div className="mb-8">
              <p className="font-bold mb-3">
                Coupon Code
              </p>

              <div className="flex gap-3">
                <input
                  placeholder="Enter coupon"
                  className="flex-1 border rounded-2xl px-4 py-3 outline-none"
                />

                <button className="bg-black text-white px-5 rounded-2xl font-semibold">
                  Apply
                </button>
              </div>
            </div>

            {/* PRICE */}
            <div className="space-y-4 border-t pt-6 mb-8">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>₹{shipping}</span>
              </div>

              <div className="flex justify-between text-2xl font-black pt-4 border-t">
                <span>Total</span>
                <span className="text-indigo-600">
                  ₹{total}
                </span>
              </div>
            </div>

            {/* BUTTON */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-xl transition mb-6">
              Place Order
            </button>

            {/* SECURITY */}
            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <p>✔ Secure Payment Gateway</p>
              <p>✔ Encrypted Transactions</p>
              <p>✔ Fast Delivery</p>
              <p>✔ 7 Day Easy Returns</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
