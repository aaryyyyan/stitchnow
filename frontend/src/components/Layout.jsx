import { Link } from "react-router-dom";

export default function Layout({ children }) {

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div className="flex h-screen">

      {/* 🔥 SIDEBAR */}
      <div className="w-60 bg-gray-900 text-white p-5">
        <h2 className="text-xl mb-5">StitchNow</h2>

        <Link to="/dashboard" className="block mb-3">Dashboard</Link>
        <Link to="/admin" className="block mb-3">Admin</Link>

        <button onClick={logout} className="mt-5 bg-red-500 px-3 py-1 rounded">
          Logout
        </button>
      </div>

      {/* 🔥 CONTENT */}
      <div className="flex-1 p-6 bg-gray-100">
        {children}
      </div>
    </div>
  );
}