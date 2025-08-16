import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { FaCoffee, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isStrongPassword = (pwd) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd
    );

  const handleLogin = (e) => {
    e.preventDefault();

    if (!isStrongPassword(password)) {
      Swal.fire({
        title: "Weak Password!",
        text: "Password must include uppercase, lowercase, number & special character (min 8 chars).",
        icon: "warning",
        confirmButtonColor: "#d97706",
      });
      return;
    }

    signInUser(email, password)
      .then(() => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        });
      })
      .catch((error) => {
        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaCoffee className="text-5xl text-amber-700 mb-2" />
          <h1 className="text-2xl font-bold text-amber-800">Coffee Haven</h1>
          <p className="text-sm text-amber-600">Welcome back! Please login.</p>
        </motion.div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleLogin}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <label className="block mb-1 text-sm font-medium text-amber-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <label className="block mb-1 text-sm font-medium text-amber-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 pr-10"
                value={password}
                name="password"
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
                  ? "Strong password"
                  : "Weak password, use 8+ chars, uppercase, lowercase, number & symbol"}
              </p>
            )}
          </motion.div>

          <motion.div
            className="flex items-center justify-between text-sm"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <label className="flex items-center text-amber-600 gap-2">
              <input type="checkbox" className="text-amber-500" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-amber-600 hover:underline"
            >
              Forgot password?
            </Link>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Login
          </motion.button>
        </form>

        {/* Divider */}
        <motion.div
          className="flex items-center my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <hr className="flex-grow border-amber-300" />
          <span className="px-2 text-amber-500">or</span>
          <hr className="flex-grow border-amber-300" />
        </motion.div>

        {/* Social login */}
        <motion.button
          className="w-full flex items-center justify-center gap-2 border border-amber-400 py-2 rounded-lg hover:bg-amber-100 text-amber-700 transition"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <FcGoogle size={18} />
          Continue with Google
        </motion.button>

        {/* Sign up link */}
        <motion.p
          className="text-center text-sm text-amber-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Don’t have an account?{" "}
          <Link to="/signup" className="font-semibold hover:underline">
            Sign up
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Login;
