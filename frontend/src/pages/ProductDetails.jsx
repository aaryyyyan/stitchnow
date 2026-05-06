import { useState } from "react";

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedImage, setSelectedImage] = useState(
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop"
  );

  const images = [
    "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=1200&auto=format&fit=crop",
  ];

  const relatedProducts = [
    {
      name: "Luxury Wedding Suit",
      price: "₹8,999",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Premium Kurta",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Designer Blazer",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const reviews = [
    {
      name: "Aryan",
      rating: 5,
      comment: "Amazing fitting and premium quality fabric.",
    },
    {
      name: "Rahul",
      rating: 4,
      comment: "Very stylish and delivery was fast.",
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
              placeholder="Search fashion..."
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

      {/* PRODUCT SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12">
        {/* LEFT */}
        <div>
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg mb-5">
            <img
              src={selectedImage}
              className="w-full h-[650px] object-cover"
            />
          </div>

          <div className="flex gap-4 overflow-auto">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`w-28 h-28 object-cover rounded-2xl cursor-pointer border-4 ${
                  selectedImage === img
                    ? "border-indigo-600"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <p className="uppercase text-indigo-600 font-bold tracking-[0.2em] mb-3 text-sm">
            Premium Collection
          </p>

          <h1 className="text-5xl font-black mb-4 leading-tight">
            Premium Wedding Blazer
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
              4.8 ★
            </span>

            <span className="text-gray-500">
              2,481 Ratings
            </span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-5xl font-black text-indigo-600">
              ₹4,999
            </h2>

            <p className="text-2xl line-through text-gray-400">
              ₹7,999
            </p>

            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full font-bold">
              38% OFF
            </span>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            Premium tailored blazer made with luxury fabric and modern
            craftsmanship. Perfect for weddings, parties, and premium
            occasions.
          </p>

          {/* SIZE */}
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">
                Select Size
              </h3>

              <button className="text-indigo-600 font-semibold">
                Size Guide
              </button>
            </div>

            <div className="flex gap-4 flex-wrap">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-14 h-14 rounded-full border-2 font-bold transition ${
                    selectedSize === size
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-lg transition">
              Add To Cart
            </button>

            <button className="flex-1 bg-black hover:bg-gray-900 text-white py-5 rounded-2xl font-bold text-lg transition">
              Buy Now
            </button>
          </div>

          {/* CUSTOM TAILORING */}
          <div className="bg-white rounded-3xl p-6 shadow-lg mb-10">
            <h3 className="text-2xl font-black mb-4">
              Custom Tailoring
            </h3>

            <p className="text-gray-600 mb-5">
              Upload your body measurements and get perfectly stitched
              fitting.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold">
                Upload Measurements
              </button>

              <button className="border border-gray-300 px-5 py-3 rounded-xl font-semibold hover:bg-gray-100">
                Use Saved Measurements
              </button>
            </div>
          </div>

          {/* DELIVERY */}
          <div className="bg-white rounded-3xl p-6 shadow-lg">
            <h3 className="text-2xl font-black mb-4">
              Delivery Information
            </h3>

            <div className="flex flex-col gap-3 text-gray-600">
              <p>✔ Free Delivery</p>
              <p>✔ 7 Days Return Policy</p>
              <p>✔ COD Available</p>
              <p>✔ Delivery in 3-5 Days</p>
            </div>
          </div>
        </div>
      </div>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-black mb-10">
          Customer Reviews
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-6 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-xl">
                  {review.name}
                </h3>

                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold">
                  {review.rating} ★
                </span>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-4xl font-black">
              Related Products
            </h2>

            <button className="text-indigo-600 font-bold">
              View All
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((product, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-3xl overflow-hidden shadow hover:shadow-2xl transition"
              >
                <img
                  src={product.image}
                  className="h-96 w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-xl mb-3">
                    {product.name}
                  </h3>

                  <div className="flex items-center justify-between">
                    <p className="text-indigo-600 font-black text-2xl">
                      {product.price}
                    </p>

                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700">
                      View
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
