export default function StitchNowHomepage() {
  const categories = [
    {
      name: "Men",
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Women",
      image:
        "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Ethnic",
      image:
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Custom Tailoring",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const products = [
    {
      name: "Premium Blazer",
      price: "₹4,999",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Designer Kurta",
      price: "₹2,299",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Wedding Suit",
      price: "₹8,499",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Custom Saree",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl font-black tracking-tight text-indigo-600">
              StitchNow
            </h1>

            <div className="hidden md:flex gap-6 text-sm font-semibold">
              <button>Men</button>
              <button>Women</button>
              <button>Ethnic</button>
              <button>Tailoring</button>
              <button>New Arrivals</button>
            </div>
          </div>

          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-[350px]">
            <input
              placeholder="Search fashion, tailoring, styles..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          <div className="flex items-center gap-5 font-medium text-sm">
            <button>Wishlist</button>
            <button>Cart</button>
            <button>Profile</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-indigo-600 font-bold mb-4 text-sm">
              Fashion + Tailoring Platform
            </p>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Wear
              <span className="text-indigo-600"> Custom </span>
              Fashion.
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl">
              Discover premium fashion, connect with expert tailors,
              customize outfits, save body measurements, and get your
              clothes stitched exactly the way you want.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-7 py-3 rounded-full font-semibold transition">
                Shop Now
              </button>

              <button className="border border-gray-300 hover:bg-gray-100 px-7 py-3 rounded-full font-semibold transition">
                Explore Tailors
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
              className="rounded-3xl shadow-2xl h-[650px] w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-5 shadow-xl w-64">
              <p className="text-sm text-gray-500 mb-1">Trending Style</p>
              <h3 className="font-bold text-lg">Luxury Wedding Wear</h3>
              <p className="text-indigo-600 font-bold mt-2">Starting ₹4,999</p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-black">Shop By Category</h2>
          <button className="text-indigo-600 font-semibold">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <img
                src={cat.image}
                className="h-80 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold">{cat.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black">Trending Products</h2>
            <button className="text-indigo-600 font-semibold">
              Explore More
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow hover:shadow-2xl transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    className="h-80 w-full object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-indigo-600 font-black text-xl">
                      {product.price}
                    </p>

                    <button className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700">
                      Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-black mb-4">
              Custom Measurements
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Save your body measurements once and order perfectly fitted
              outfits anytime.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-black mb-4">
              Expert Tailors
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Connect with verified tailors for premium stitching and
              personalized fashion.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">
            <h3 className="text-2xl font-black mb-4">
              AI Fashion Recommendation
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Discover styles and outfits based on your fashion taste and
              measurements.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-black mb-6">
            Stay In Fashion.
          </h2>

          <p className="text-lg text-indigo-100 mb-8">
            Get updates about new collections, tailoring offers, and style
            recommendations.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <input
              placeholder="Enter your email"
              className="px-5 py-4 rounded-full text-black w-full md:w-[400px] outline-none"
            />

            <button className="bg-black hover:bg-gray-900 px-8 py-4 rounded-full font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-black mb-4">StitchNow</h2>
            <p className="text-gray-400 leading-relaxed">
              Modern fashion and tailoring marketplace built for the next
              generation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <button className="text-left">About</button>
              <button className="text-left">Careers</button>
              <button className="text-left">Contact</button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <button className="text-left">Help Center</button>
              <button className="text-left">Returns</button>
              <button className="text-left">Track Order</button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Legal</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <button className="text-left">Privacy Policy</button>
              <button className="text-left">Terms & Conditions</button>
              <button className="text-left">Cookies</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
