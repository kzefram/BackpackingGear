import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Local hero image for signup page (placed in client/src/assets)
// Original Unsplash URL: https://unsplash.com/photos/waterfalls-in-forest-during-daytime-YRixxe2ZNww?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
import signupBg from "../src/assets/varad-parulekar-YRixxe2ZNww-unsplash.jpg";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError("");
    if (!email) return setError("Please provide an email");
    if (!password) return setError("Please provide a password");
    if (password !== confirm) return setError("Passwords do not match");

    // Try server signup, fall back to demo-token when unavailable
    try {
      const res = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (res.ok) {
        const data = await res.json();
        if (data?.token) {
          localStorage.setItem("tt_token", data.token);
        }
        // store a lightweight profile locally for demo UX
        localStorage.setItem(
          "user_profile",
          JSON.stringify({ email: data?.user?.email || email })
        );
        navigate("/");
        return;
      }

      // If server returns an error, show message then fallback
      const body = await res.json().catch(() => ({}));
      setError(body?.message || "Sign up failed on server; using demo token.");
    } catch {
      // network error or server not running
      setError("Server unavailable; using demo token.");
    }

    // Fallback demo behavior so the page remains usable in local-only mode
    localStorage.setItem("tt_token", "demo-token");
    localStorage.setItem("user_profile", JSON.stringify({ email }));
    navigate("/");
  }

  return (
    <div className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      {/* Full-screen hero background */}
      <img
        src={signupBg}
        alt='Signup background'
        className='absolute inset-0 w-full h-full object-cover block -z-10'
      />

      <div className='w-full max-w-md mx-4'>
        <div className='bg-white/95 rounded-2xl shadow-xl p-8 backdrop-blur-sm'>
          <h1 className='text-3xl font-extrabold text-gray-900 mb-2 text-center'>
            Create an account
          </h1>
          <p className='text-sm text-gray-500 mb-6 text-center'>
            Sign up to sync your gear across devices (or use locally).
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

            <div>
              <label className='block text-xs font-medium text-gray-700 mb-1'>
                Confirm password
              </label>
              <input
                type='password'
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className='w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              />
            </div>

            {error && <div className='text-sm text-red-600'>{error}</div>}

            <button
              type='submit'
              className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md px-4 py-3 mt-1'
            >
              Sign up
            </button>
          </form>

          <div className='mt-6 text-center text-sm text-gray-600'>
            Already have an account?{" "}
            <Link to='/signin' className='text-indigo-600 font-medium'>
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
