import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Local background image (placed in client/src/assets)
// Original Unsplash URL: https://unsplash.com/photos/green-field-during-golden-hour-uH5OXBhnSNg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
import simonBg from "../src/assets/simon-wilkes-uH5OXBhnSNg-unsplash.jpg";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    // Placeholder: replace with server call later
    if (!email) return;
    localStorage.setItem("tt_token", "demo-token");
    navigate("/");
  }

  return (
    <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Use the provided local photo as the page background */}
      <img
        src={simonBg}
        alt='background'
        className='absolute inset-0 w-full h-full object-cover block -z-10'
      />
      <div className='w-full max-w-md mx-4'>
        <div className='bg-white/95 rounded-2xl shadow-xl p-8 backdrop-blur-sm'>
          <h1 className='text-3xl font-extrabold text-gray-900 mb-2 text-center'>
            Welcome back
          </h1>
          <p className='text-sm text-gray-500 mb-6 text-center'>
            Sign in to continue to Backpacking Gear Tracker
          </p>

          <form onSubmit={submit} className='space-y-4'>
            <div>
              <label className='block text-xs font-medium text-gray-700 mb-1'>
                Email
              </label>
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <div>
              <label className='block text-xs font-medium text-gray-700 mb-1'>
                Password
              </label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-4 py-3 mt-1'
            >
              Sign in
            </button>
          </form>

          <div className='mt-6 text-center text-sm text-gray-600'>
            Don't have an account?{" "}
            <Link to='/signup' className='text-indigo-600 font-medium'>
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
