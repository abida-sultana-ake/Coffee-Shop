import React, { useState, useContext } from "react";
import { Link } from "react-router";
import { FaCoffee, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../contexts/AuthContext";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const isStrongPassword = (pwd) =>
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd
    );

  const passwordsMatch = () => password === confirmPassword;

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;

    if (!isStrongPassword(password)) {
      Swal.fire({
        title: "Weak Password!",
        text: "Password must include uppercase, lowercase, number & special character (min 8 chars).",
        icon: "warning",
        confirmButtonColor: "#d97706",
      });
      return;
    }

    if (!passwordsMatch()) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match.",
        icon: "error",
        confirmButtonColor: "#b91c1c",
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);

        Swal.fire({
          title: "Success!",
          text: `Welcome ${name}, your account has been created.`,
          icon: "success",
          confirmButtonColor: "#d97706",
        });

        e.target.reset();
        setPassword("");
        setConfirmPassword("");
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#b91c1c",
        });
      });
  };

  // Motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const buttonHover = { scale: 1.05, transition: { duration: 0.2 } };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="bg-white shadow-xl rounded-2xl w-full max-w-md p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo */}
        <motion.div
          className="flex flex-col items-center mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaCoffee className="text-5xl text-amber-700 mb-2 animate-bounce" />
          <h1 className="text-2xl font-bold text-amber-800">Coffee Haven</h1>
          <p className="text-sm text-amber-600">Create your account</p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block mb-1 text-sm font-medium text-amber-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Abida Sultana"
              className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
              required
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
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
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <label className="block mb-1 text-sm font-medium text-amber-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
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
                  ? "Strong password"
                  : "Weak password, use 8+ chars, uppercase, lowercase, number & symbol"}
              </p>
            )}
          </motion.div>

          {/* Confirm Password */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <label className="block mb-1 text-sm font-medium text-amber-700">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border border-amber-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 pr-10"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-amber-700"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {confirmPassword && !passwordsMatch() && (
              <p className="mt-1 text-sm text-red-600">
                Passwords do not match
              </p>
            )}
          </motion.div>

          {/* Submit */}
          <motion.button
            type="submit"
            className="w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition"
            whileHover={buttonHover}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
        </form>

        {/* Divider */}
        <motion.div
          className="flex items-center my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <hr className="flex-grow border-amber-300" />
          <span className="px-2 text-amber-500">or</span>
          <hr className="flex-grow border-amber-300" />
        </motion.div>

        {/* Google signup */}
        <motion.button
          className="w-full flex items-center justify-center gap-2 border border-amber-400 py-2 rounded-lg hover:bg-amber-100 text-amber-700 transition"
          whileHover={buttonHover}
          whileTap={{ scale: 0.95 }}
        >
          <FcGoogle size={18} />
          Continue with Google
        </motion.button>

        {/* Login link */}
        <motion.p
          className="text-center text-sm text-amber-600 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Already have an account?{" "}
          <Link to="/login" className="font-semibold hover:underline">
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
};

export default SignUp;

// Test
// test@gmail.com
//Test@123456
