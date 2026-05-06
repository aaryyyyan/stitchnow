import { useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Premium Wedding Blazer",
      price: 4999,
      oldPrice: 7999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Luxury Kurta Set",
      price: 2499,
      oldPrice: 3999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Designer Bridal Saree",
      price: 8999,
      oldPrice: 12999,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200&auto=format&fit=crop",
    },
  ]);

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const moveToCart = (name) => {
    alert(`${name} moved to cart`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black text-pink-600">
            StitchNow
          </h1>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[350px]">
            <input
              placeholder="Search wishlist..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="flex gap-5 font-medium">
            <button>Products</button>
            <button>Cart</button>
            <button>Profile</button>
          </div>
        </div>
      </div>

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-5xl font-black mb-3">
            My Wishlist ❤️
          </h1>

          <p className="text-gray-500 text-lg">
            Save your favorite fashion styles and premium tailoring picks.
          </p>
        </div>

        <div className="bg-pink-100 text-pink-700 px-6 py-4 rounded-2xl font-bold text-lg">
          {wishlist.length} Items Saved
        </div>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-6 pb-16">
        {wishlist.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center shadow-lg">
            <h2 className="text-4xl font-black mb-4">
              Wishlist Empty 😢
            </h2>

            <p className="text-gray-500 text-lg mb-8">
              Start saving your favorite fashion products.
            </p>

            <button className="bg-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-pink-700 transition">
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-4 right-4 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition"
                  >
                    ❤️
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h2 className="text-2xl font-black leading-snug">
                      {product.name}
                    </h2>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm whitespace-nowrap">
                      {product.rating} ★
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-8">
                    <p className="text-3xl font-black text-pink-600">
                      ₹{product.price}
                    </p>

                    <p className="line-through text-gray-400 text-lg">
                      ₹{product.oldPrice}
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => moveToCart(product.name)}
                      className="flex-1 bg-pink-600 hover:bg-pink-700 text-white py-4 rounded-2xl font-bold transition"
                    >
                      Move To Cart
                    </button>

                    <button className="border border-gray-300 hover:bg-gray-100 px-5 rounded-2xl transition font-semibold">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RECOMMENDATION SECTION */}
      <section className="bg-white py-16 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-black">
              Trending For You
            </h2>

            <button className="text-pink-600 font-bold">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow hover:shadow-xl transition"
              >
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
                  className="h-80 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-black text-xl mb-2">
                    Designer Suit
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-pink-600 font-black text-2xl">
                      ₹5,999
                    </p>

                    <button className="bg-pink-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-pink-700">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
