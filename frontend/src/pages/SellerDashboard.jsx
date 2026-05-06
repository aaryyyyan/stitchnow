import { useEffect, useState } from "react";

export default function SellerDashboard() {

  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  // LOAD PRODUCTS
  const loadProducts = async () => {

    const res = await fetch(
      "https://stitchnow.onrender.com/api/products"
    );

    const data = await res.json();

    setProducts(data);
  };

  // ADD PRODUCT
  const addProduct = async () => {

    if (!name || !image || !price || !stock) {
      alert("Fill all fields");
      return;
    }

    await fetch(
      "https://stitchnow.onrender.com/api/products",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          name,
          image,
          price,
          stock
        })
      }
    );

    setName("");
    setImage("");
    setPrice("");
    setStock("");

    loadProducts();
  };

  // DELETE PRODUCT
  const deleteProduct = async (id) => {

    await fetch(
      `https://stitchnow.onrender.com/api/products/${id}`,
      {
        method: "DELETE"
      }
    );

    loadProducts();
  };

  // AUTO LOAD
  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* NAVBAR */}
      <div className="bg-black text-white px-8 py-5 flex justify-between items-center">

        <div>
          <h1 className="text-3xl font-black">
            StitchNow Seller
          </h1>

          <p className="text-gray-300">
            Marketplace Dashboard
          </p>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 px-5 py-3 rounded-2xl font-bold">
          Live Store
        </button>

      </div>

      {/* MAIN */}
      <div className="p-8">

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <p className="text-gray-500 mb-3">
              Total Products
            </p>

            <h2 className="text-5xl font-black text-indigo-600">
              {products.length}
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <p className="text-gray-500 mb-3">
              Revenue
            </p>

            <h2 className="text-5xl font-black text-green-600">
              ₹2.4L
            </h2>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-lg">

            <p className="text-gray-500 mb-3">
              Orders
            </p>

            <h2 className="text-5xl font-black text-pink-600">
              124
            </h2>

          </div>

        </div>

        {/* ADD PRODUCT */}
        <div className="bg-white rounded-[32px] p-8 shadow-xl mb-12">

          <h2 className="text-4xl font-black mb-8">
            Add New Product
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product Name"
              className="border p-4 rounded-2xl outline-none"
            />

            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="border p-4 rounded-2xl outline-none"
            />

            <input
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="Stock"
              className="border p-4 rounded-2xl outline-none"
            />

            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              className="border p-4 rounded-2xl outline-none"
            />

          </div>

          <button
            onClick={addProduct}
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-2xl font-bold text-lg"
          >
            Add Product
          </button>

        </div>

        {/* PRODUCTS */}
        <div>

          <div className="flex items-center justify-between mb-8">

            <div>
              <h2 className="text-5xl font-black">
                Live Products
              </h2>

              <p className="text-gray-500 text-lg">
                Products from database
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {products.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-[32px] overflow-hidden shadow-xl hover:shadow-2xl transition"
              >

                <img
                  src={product.image}
                  className="h-[320px] w-full object-cover"
                />

                <div className="p-6">

                  <div className="bg-green-100 text-green-700 inline-flex px-4 py-2 rounded-full font-bold text-sm mb-5">
                    In Stock
                  </div>

                  <h3 className="text-3xl font-black mb-4 leading-tight">
                    {product.name}
                  </h3>

                  <div className="space-y-3 text-lg text-gray-600 mb-8">

                    <p>
                      Price: ₹{product.price}
                    </p>

                    <p>
                      Stock: {product.stock}
                    </p>

                  </div>

                  <div className="flex gap-4">

                    <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold">
                      Edit
                    </button>

                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="flex-1 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl font-bold"
                    >
                      Delete
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