import { useState } from "react";

export default function AIRecommendations() {
  const [selectedStyle, setSelectedStyle] = useState("Wedding");

  const styles = [
    "Wedding",
    "Casual",
    "Office",
    "Party",
    "Traditional",
  ];

  const recommendations = [
    {
      id: 1,
      name: "Royal Wedding Blazer",
      match: "98% Match",
      price: "₹5,999",
      image:
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Luxury Ethnic Kurta",
      match: "95% Match",
      price: "₹2,499",
      image:
        "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1200&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Designer Party Suit",
      match: "92% Match",
      price: "₹6,999",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const outfits = [
    {
      title: "Complete Wedding Look",
      desc: "Blazer + Shirt + Shoes + Watch",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Premium Casual Style",
      desc: "Overshirt + Denim + Sneakers",
      image:
        "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-indigo-50">
      {/* NAVBAR */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black text-indigo-600">
            StitchNow AI
          </h1>

          <div className="flex gap-5 font-medium">
            <button>Products</button>
            <button>Cart</button>
            <button>Wishlist</button>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-14 pb-12">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[40px] overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center">
            <div className="p-10 lg:p-16 text-white">
              <p className="uppercase tracking-[0.3em] text-sm mb-5 opacity-80">
                AI Fashion Engine
              </p>

              <h1 className="text-6xl font-black leading-tight mb-6">
                Personalized Fashion Recommendations
              </h1>

              <p className="text-lg opacity-90 leading-relaxed mb-8">
                StitchNow AI analyzes your fashion taste and suggests
                premium outfits, tailoring styles, and trending fashion.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-indigo-700 px-8 py-4 rounded-2xl font-black hover:scale-105 transition">
                  Explore AI Picks
                </button>

                <button className="border border-white/30 px-8 py-4 rounded-2xl font-black hover:bg-white/10 transition">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop"
                className="h-[600px] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STYLE SELECTOR */}
      <section className="max-w-7xl mx-auto px-6 pb-14">
        <div className="flex flex-wrap gap-4">
          {styles.map((style) => (
            <button
              key={style}
              onClick={() => setSelectedStyle(style)}
              className={`px-6 py-3 rounded-full font-bold transition ${
                selectedStyle === style
                  ? "bg-indigo-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 hover:border-indigo-600"
              }`}
            >
              {style}
            </button>
          ))}
        </div>
      </section>

      {/* AI RECOMMENDATIONS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-5xl font-black mb-3">
              Recommended For You
            </h2>

            <p className="text-gray-500 text-lg">
              AI-powered fashion suggestions based on your style.
            </p>
          </div>

          <div className="bg-indigo-100 text-indigo-700 px-5 py-3 rounded-2xl font-bold">
            AI Active ⚡
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendations.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  className="h-[450px] w-full object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute top-5 left-5 bg-black/80 text-white px-4 py-2 rounded-full font-bold text-sm backdrop-blur-lg">
                  {product.match}
                </div>

                <button className="absolute top-5 right-5 bg-white w-12 h-12 rounded-full shadow-xl flex items-center justify-center text-2xl hover:scale-110 transition">
                  ❤️
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black mb-4 leading-snug">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mb-6">
                  <p className="text-indigo-600 text-3xl font-black">
                    {product.price}
                  </p>

                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-bold text-sm">
                    Trending
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition">
                    Add To Cart
                  </button>

                  <button className="border border-gray-300 hover:bg-gray-100 px-5 rounded-2xl font-semibold transition">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OUTFIT COMBOS */}
      <section className="bg-white py-20 border-t">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-5xl font-black mb-3">
                AI Outfit Combos
              </h2>

              <p className="text-gray-500 text-lg">
                Complete styling suggestions generated by AI.
              </p>
            </div>

            <button className="text-indigo-600 font-black text-lg">
              Explore More
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {outfits.map((outfit, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-[40px] overflow-hidden shadow-xl hover:shadow-2xl transition"
              >
                <div className="grid md:grid-cols-2 items-center">
                  <img
                    src={outfit.image}
                    className="h-full min-h-[420px] object-cover"
                  />

                  <div className="p-8">
                    <div className="bg-indigo-100 text-indigo-700 inline-flex px-4 py-2 rounded-full font-bold text-sm mb-6">
                      AI Styled Look
                    </div>

                    <h3 className="text-4xl font-black mb-5 leading-tight">
                      {outfit.title}
                    </h3>

                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {outfit.desc}
                    </p>

                    <div className="flex gap-4">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-2xl font-bold transition">
                        Shop Outfit
                      </button>

                      <button className="border border-gray-300 hover:bg-gray-100 px-6 py-4 rounded-2xl font-bold transition">
                        Save Look
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI INSIGHTS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-[32px] p-8 shadow-xl text-center">
            <div className="text-6xl mb-5">🤖</div>
            <h3 className="text-3xl font-black mb-4">
              Smart AI Styling
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Personalized fashion suggestions powered by AI behavior analysis.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-xl text-center">
            <div className="text-6xl mb-5">📈</div>
            <h3 className="text-3xl font-black mb-4">
              Trend Analysis
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Real-time fashion trend recommendations for modern users.
            </p>
          </div>

          <div className="bg-white rounded-[32px] p-8 shadow-xl text-center">
            <div className="text-6xl mb-5">✨</div>
            <h3 className="text-3xl font-black mb-4">
              Premium Experience
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Discover luxury outfits tailored to your personality.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
