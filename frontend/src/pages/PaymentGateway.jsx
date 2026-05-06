import { useState } from "react";

export default function PaymentGateway() {
  const [method, setMethod] = useState("upi");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* NAVBAR */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-black text-indigo-600">
            StitchNow
          </h1>

          <div className="flex gap-5 font-medium">
            <button>Products</button>
            <button>Cart</button>
            <button>Orders</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-[1fr_420px] gap-10">
        {/* LEFT */}
        <div className="space-y-8">
          {/* PAYMENT METHODS */}
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-black mb-8">
              Choose Payment Method
            </h2>

            <div className="grid md:grid-cols-3 gap-5">
              <button
                onClick={() => setMethod("upi")}
                className={`rounded-3xl border-2 p-6 text-left transition ${
                  method === "upi"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="text-4xl mb-4">📱</div>
                <h3 className="font-black text-xl mb-2">UPI</h3>
                <p className="text-gray-500 text-sm">
                  Pay using PhonePe, GPay, Paytm
                </p>
              </button>

              <button
                onClick={() => setMethod("card")}
                className={`rounded-3xl border-2 p-6 text-left transition ${
                  method === "card"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-black text-xl mb-2">Card</h3>
                <p className="text-gray-500 text-sm">
                  Credit / Debit Card
                </p>
              </button>

              <button
                onClick={() => setMethod("wallet")}
                className={`rounded-3xl border-2 p-6 text-left transition ${
                  method === "wallet"
                    ? "border-indigo-600 bg-indigo-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="text-4xl mb-4">👛</div>
                <h3 className="font-black text-xl mb-2">Wallet</h3>
                <p className="text-gray-500 text-sm">
                  Amazon Pay, Mobikwik & more
                </p>
              </button>
            </div>
          </div>

          {/* UPI */}
          {method === "upi" && (
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-black mb-8">
                UPI Payment
              </h2>

              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="space-y-5">
                    <input
                      placeholder="Enter UPI ID"
                      className="w-full border rounded-2xl px-5 py-4 outline-none"
                    />

                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold text-lg transition">
                      Verify & Pay
                    </button>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                      <span className="text-3xl">📲</span>
                      <div>
                        <h3 className="font-bold">Google Pay</h3>
                        <p className="text-gray-500 text-sm">
                          Fast secure payment
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-2xl">
                      <span className="text-3xl">💜</span>
                      <div>
                        <h3 className="font-bold">PhonePe</h3>
                        <p className="text-gray-500 text-sm">
                          Instant UPI payment
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="bg-gray-100 rounded-3xl p-8 shadow-inner">
                    <img
                      src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=stitchnow-payment"
                      className="w-64 h-64 rounded-2xl"
                    />
                  </div>

                  <p className="text-gray-500 mt-5 text-center">
                    Scan QR using any UPI app
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CARD */}
          {method === "card" && (
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-black mb-8">
                Card Payment
              </h2>

              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white mb-10 shadow-xl">
                <p className="uppercase tracking-[0.2em] text-sm mb-8 opacity-80">
                  StitchNow Premium Card
                </p>

                <h2 className="text-4xl font-black mb-10 tracking-widest">
                  4587  4587  4587  4587
                </h2>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm opacity-70">Card Holder</p>
                    <h3 className="font-bold text-xl">ARYAN GIRI</h3>
                  </div>

                  <div>
                    <p className="text-sm opacity-70">Expires</p>
                    <h3 className="font-bold text-xl">12/30</h3>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Card Holder Name"
                  className="border rounded-2xl px-5 py-4 outline-none md:col-span-2"
                />

                <input
                  placeholder="Card Number"
                  className="border rounded-2xl px-5 py-4 outline-none md:col-span-2"
                />

                <input
                  placeholder="MM/YY"
                  className="border rounded-2xl px-5 py-4 outline-none"
                />

                <input
                  placeholder="CVV"
                  className="border rounded-2xl px-5 py-4 outline-none"
                />
              </div>

              <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-xl transition">
                Pay Securely
              </button>
            </div>
          )}

          {/* WALLET */}
          {method === "wallet" && (
            <div className="bg-white rounded-3xl p-8 shadow-xl">
              <h2 className="text-3xl font-black mb-8">
                Wallet Payments
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {[
                  "Amazon Pay",
                  "Paytm Wallet",
                  "Mobikwik",
                  "Freecharge",
                ].map((wallet, i) => (
                  <button
                    key={i}
                    className="border rounded-3xl p-6 text-left hover:border-indigo-600 hover:bg-indigo-50 transition"
                  >
                    <div className="text-4xl mb-4">👛</div>
                    <h3 className="font-black text-xl mb-2">
                      {wallet}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      Secure wallet payment
                    </p>
                  </button>
                ))}
              </div>

              <button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-xl transition">
                Continue Payment
              </button>
            </div>
          )}
        </div>

        {/* RIGHT */}
        <div>
          <div className="bg-white rounded-3xl p-8 shadow-2xl sticky top-28">
            <h2 className="text-3xl font-black mb-8">
              Payment Summary
            </h2>

            <div className="space-y-5 mb-8">
              <div className="flex justify-between text-gray-600 text-lg">
                <span>Items Total</span>
                <span>₹9,997</span>
              </div>

              <div className="flex justify-between text-gray-600 text-lg">
                <span>Shipping Fee</span>
                <span>₹99</span>
              </div>

              <div className="flex justify-between text-gray-600 text-lg">
                <span>Discount</span>
                <span className="text-green-600">-₹500</span>
              </div>

              <div className="border-t pt-5 flex justify-between text-3xl font-black">
                <span>Total</span>
                <span className="text-indigo-600">₹9,596</span>
              </div>
            </div>

            {/* SECURITY */}
            <div className="bg-green-50 rounded-2xl p-5 mb-8">
              <h3 className="font-black text-xl mb-3 text-green-700">
                Secure Checkout 🔒
              </h3>

              <div className="space-y-2 text-gray-600 text-sm">
                <p>✔ 256-bit SSL encryption</p>
                <p>✔ PCI DSS compliant payments</p>
                <p>✔ Secure transaction processing</p>
              </div>
            </div>

            {/* PAYMENT SUCCESS MOCK */}
            <div className="bg-indigo-50 rounded-3xl p-6 text-center">
              <div className="text-6xl mb-4">✅</div>

              <h3 className="text-2xl font-black mb-3">
                Fast & Secure Payment
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Your transactions are protected with enterprise-grade security.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
