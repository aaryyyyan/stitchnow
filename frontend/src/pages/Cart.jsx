import { useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wedding Blazer",
      price: 4999,
      quantity: 1,
      size: "M",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Luxury Kurta Set",
      price: 2499,
      quantity: 2,
      size: "L",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  const increaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const deliveryFee = 99;
  const total = subtotal + deliveryFee;

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
            <button>Wishlist</button>
            <button>Profile</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_400px] gap-10">
        {/* LEFT */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-5xl font-black mb-2">
                Shopping Cart
              </h1>

              <p className="text-gray-500">
                {cartItems.length} items in your cart
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-5 shadow-lg flex flex-col md:flex-row gap-6"
              >
                <img
                  src={item.image}
                  className="w-full md:w-52 h-60 object-cover rounded-2xl"
                />

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <h2 className="text-2xl font-black mb-2">
                          {item.name}
                        </h2>

                        <p className="text-gray-500 mb-4">
                          Size: {item.size}
                        </p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 font-semibold"
                      >
                        Remove
                      </button>
                    </div>

                    <h3 className="text-3xl font-black text-indigo-600 mb-6">
                      ₹{item.price}
                    </h3>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="flex items-center border rounded-full overflow-hidden">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-4 py-2 text-xl hover:bg-gray-100"
                      >
                        -
                      </button>

                      <span className="px-6 font-bold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-4 py-2 text-xl hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>

                    <p className="text-gray-500">
                      Total: ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="bg-white rounded-3xl p-8 shadow-xl sticky top-28">
            <h2 className="text-3xl font-black mb-8">
              Order Summary
            </h2>

            <div className="flex flex-col gap-5 mb-8">
              <div className="flex justify-between text-gray-600 text-lg">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>

              <div className="flex justify-between text-gray-600 text-lg">
                <span>Delivery Fee</span>
                <span>₹{deliveryFee}</span>
              </div>

              <div className="border-t pt-5 flex justify-between text-2xl font-black">
                <span>Total</span>
                <span className="text-indigo-600">₹{total}</span>
              </div>
            </div>

            {/* COUPON */}
            <div className="mb-8">
              <p className="font-bold mb-3">
                Apply Coupon
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

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-xl transition mb-5">
              Proceed To Checkout
            </button>

            <div className="flex flex-col gap-3 text-gray-500 text-sm">
              <p>✔ Secure Payments</p>
              <p>✔ Easy Returns</p>
              <p>✔ Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* RECOMMENDATIONS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-4xl font-black">
            You May Also Like
          </h2>

          <button className="text-indigo-600 font-bold">
            View All
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
            >
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
                className="h-96 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-black mb-3">
                  Designer Suit
                </h3>

                <div className="flex items-center justify-between">
                  <p className="text-indigo-600 font-black text-2xl">
                    ₹5,999
                  </p>

                  <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700">
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
