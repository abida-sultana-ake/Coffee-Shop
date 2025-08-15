import React, { useState } from "react";
import { Link } from "react-router";
import { FaCoffee, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isStrongPassword = (pwd) => {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-6">
          <FaCoffee className="text-5xl text-amber-700 mb-2" />
          <h1 className="text-2xl font-bold text-amber-800">Coffee Haven</h1>
          <p className="text-sm text-amber-600">Welcome back! Please login.</p>
        </div>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium text-amber-700">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-amber-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-amber-700"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {password && (
              <p
                className={`mt-1 text-sm ${
                  isStrongPassword(password) ? "text-green-600" : "text-red-600"
                }`}
              >
                {isStrongPassword(password)
                  ? "Strong password ✅"
                  : "Weak password, use 8+ chars, uppercase, lowercase, number & symbol ❌"}
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="text-amber-500" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-amber-600 hover:underline"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-amber-300" />
          <span className="px-2 text-amber-500">or</span>
          <hr className="flex-grow border-amber-300" />
        </div>

        {/* Social login */}
        <button className="w-full flex items-center justify-center gap-2 border border-amber-400 py-2 rounded-lg hover:bg-amber-100 transition">
          <FaGoogle size={18} className="border-amber-400" />
          Continue with Google
        </button>

        {/* Sign up link */}
        <p className="text-center text-sm text-amber-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;