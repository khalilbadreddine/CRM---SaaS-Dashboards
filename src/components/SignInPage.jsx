// SignInPage.js
import { useState } from "react";
import SideImageLayout from "./SideImageLayout";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      const response = await fetch("http://localhost:8000/api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong!");
      }

      // Handle successful sign-in (e.g., save token to localStorage)
      localStorage.setItem("token", data.token);
      console.log(JSON.stringify(data.user.name));
      localStorage.setItem("user", JSON.stringify(data.user.name)); // Store user info

      // Redirect to main app or protected route
      window.location.href = "/"; // Adjust based on your routing setup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl font-semibold mb-4">Welcome to our TaskAPP.</h2>
        <p className="text-gray-600 mb-6">Sign In to see latest updates.</p>
        {error && <p className="text-red-500">{error}</p>}
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-4"
            required
          />
          <button className="bg-sky-400 text-white rounded p-2 w-full mb-4">
            Sign In
          </button>
        </form>
      </div>
      <div className="flex-1 hidden md:block">
        <SideImageLayout bgColor="bg-gradient-to-r from-sky-400 to-sky-600" />
      </div>
    </div>
  );
};

export default SignInPage;
