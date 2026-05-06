import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // 🔥 AUTO LOGIN
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) return;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));

      if (payload.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (e) {
      localStorage.removeItem("token");
    }

  }, [navigate]);

  // 🔥 LOGIN
  const login = async () => {
    try {
      const res = await fetch("https://stitchnow.onrender.com/api/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const text = await res.text();
        alert("Login failed ❌: " + text);
        return;
      }

      const data = await res.json();

      localStorage.setItem("token", data.token);

      const payload = JSON.parse(atob(data.token.split('.')[1]));

      if (payload.role === "ADMIN") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err);
      alert("Server error ❌");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-80">

        <h2 className="text-2xl font-bold mb-5 text-center">
          Login
        </h2>

        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          onClick={login}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>

      </div>
    </div>
  );
}