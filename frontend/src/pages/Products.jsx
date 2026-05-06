export default function Products() {
  const products = [
    {
      id: 1,
      name: "Premium Wedding Blazer",
      category: "Men",
      price: 4999,
      oldPrice: 7999,
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Luxury Kurta Set",
      category: "Ethnic",
      price: 2499,
      oldPrice: 3999,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Custom Bridal Saree",
      category: "Women",
      price: 8999,
      oldPrice: 12999,
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 4,
      name: "Tailored Office Suit",
      category: "Men",
      price: 6999,
      oldPrice: 9999,
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Designer Lehenga",
      category: "Women",
      price: 11999,
      oldPrice: 15999,
      rating: 5.0,
      image:
        "https://images.unsplash.com/photo-1583391733956-6c78276477e2?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 6,
      name: "Custom Shirt",
      category: "Tailoring",
      price: 1999,
      oldPrice: 2999,
      rating: 4.3,
      image:
        "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black text-indigo-600">
            StitchNow
          </h1>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[350px]">
            <input
              placeholder="Search products..."
              className="bg-transparent outline-none w-full"
            />
          </div>

          <div className="flex gap-5 font-medium">
            <button>Wishlist</button>
            <button>Cart</button>
            <button>Profile</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[260px_1fr] gap-8">
        {/* SIDEBAR FILTERS */}
        <div className="bg-white rounded-3xl p-6 shadow h-fit sticky top-24">
          <h2 className="text-2xl font-black mb-6">Filters</h2>

          <div className="mb-8">
            <h3 className="font-bold mb-3">Category</h3>

            <div className="flex flex-col gap-3 text-gray-600">
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Ethnic</label>
              <label><input type="checkbox" /> Tailoring</label>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="font-bold mb-3">Price</h3>

            <input type="range" className="w-full" />

            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <span>₹500</span>
              <span>₹15000</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-3">Rating</h3>

            <div className="flex flex-col gap-3 text-gray-600">
              <label><input type="radio" name="rating" /> 4★ & above</label>
              <label><input type="radio" name="rating" /> 3★ & above</label>
              <label><input type="radio" name="rating" /> 2★ & above</label>
            </div>
          </div>
        </div>

        {/* PRODUCTS */}
        <div>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h2 className="text-4xl font-black mb-2">
                Trending Fashion
              </h2>

              <p className="text-gray-500">
                Showing premium curated styles for you.
              </p>
            </div>

            <select className="bg-white border rounded-xl px-4 py-3 outline-none shadow-sm">
              <option>Popularity</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow hover:shadow-2xl transition duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    className="h-96 w-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  <div className="absolute top-4 left-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {product.category}
                  </div>

                  <button className="absolute top-4 right-4 bg-white w-10 h-10 rounded-full shadow flex items-center justify-center text-xl">
                    ♥
                  </button>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg leading-snug">
                      {product.name}
                    </h3>

                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-bold">
                      {product.rating}★
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-5">
                    <p className="text-2xl font-black text-indigo-600">
                      ₹{product.price}
                    </p>

                    <p className="line-through text-gray-400">
                      ₹{product.oldPrice}
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-2xl font-semibold transition">
                      Add to Cart
                    </button>

                    <button className="border border-gray-300 hover:bg-gray-100 px-5 rounded-2xl transition">
                      View
                    </button>
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
