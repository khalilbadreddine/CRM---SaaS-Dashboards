// SignUpPage.js
import { useState } from "react";
import SideImageLayout from "./SideImageLayout";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state

    try {
      const response = await fetch("http://localhost:8000/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong!");
      }

      // Handle successful sign-up (e.g., redirect to sign-in page)
      window.location.href = "/signin"; // Redirect to sign-in after successful signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col justify-center items-center bg-white p-8">
        <h2 className="text-3xl font-semibold mb-4">Create an Account</h2>
        <p className="text-gray-600 mb-6">Sign up to get started.</p>
        {error && <p className="text-red-500">{error}</p>}
        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full mb-4"
            required
          />
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
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex-1 hidden md:block">
        <SideImageLayout bgColor="bg-gradient-to-r from-sky-400 to-sky-600" />
      </div>
    </div>
  );
};

export default SignUpPage;
