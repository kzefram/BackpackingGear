import React, { useState } from "react";
import { Link } from "react-router-dom";

const API = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function About() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const submit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!name || !email || !message) return setError("All fields are required");
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      const j = await res.json();
      if (!res.ok) throw new Error(j.error || "failed");
      setSuccess("Message sent — thank you!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <>
      {/* Full-width banner (full-bleed).
          Uses a <picture> so WebP/responsive variants can be added. The
          overlay is 75% (bg-black/75) for stronger contrast per request.
      */}
      {/* Banner as background-image div: more robust across routing/setup */}
      <div
        className='w-full relative bg-center bg-cover h-48 md:h-64 lg:h-96'
        style={{ backgroundImage: "url('/images/signup-backpacker.jpg')" }}
        role='img'
        aria-label='Backpacker on the trail'
      >
        <br />
        {/* Attribution placed over the image (bottom center). No background color per request; add a subtle drop shadow for legibility. */}
        <div className='absolute left-0 right-0 bottom-2 text-center text-xs text-white z-20 drop-shadow'>
          Photo:{" "}
          <a
            className='underline text-white'
            href='https://unsplash.com'
            target='_blank'
            rel='noreferrer'
          >
            Unsplash
          </a>
        </div>
      </div>

      <div className='max-w-4xl mx-auto p-4'>
        <br />
        <h1 className='text-2xl md:text-3xl font-bold mb-4'>
          About Backpacking Gear Tracker
        </h1>
        <br />
        <section className='mb-6'>
          <h2 className='text-xl font-semibold'>What is this site for?</h2>
          <br />
          <p>
            Backpacking Gear Tracker is a simple tool to track your gear and
            plan lighter, smarter trips. Add items to your inventory or a
            wishlist, record weights and purchase info, and see pack totals. The
            app currently saves data locally in your browser for a fast
            offline-first experience. You can create an account to enable
            server-backed sync (Postgres on Render) — the server stores
            passwords securely (hashed) and issues JWTs for authenticated
            requests.
          </p>
        </section>

        <section className='mb-6'>
          <h2 className='text-xl font-semibold'>How to use it</h2>
          <br />
          <ul className='list-disc ml-6'>
            <li>
              Open "My Gear" to see your inventory. The page shows item counts
              and the combined pack weight so you can quickly evaluate your
              setup.
            </li>
            <li>
              Use the Add Item flow to record name, weight, manufacturer and
              purchase info. The UI accepts weights in kg or lb depending on
              your preference and stores values internally in grams for
              consistency.
            </li>
            <li>
              Items are editable inline (Edit / Save / Cancel). You can
              favorite, update or remove items.
            </li>
            <li>
              The Wishlist shows planned items and a total wishlist weight so
              you can see how purchases would affect your pack.
            </li>
            <li>
              Change measurement units on your Profile page (metric vs
              imperial). Sign in to sync your data across devices — local
              storage is still used as an offline fallback.
            </li>
          </ul>
        </section>
        <br />

        <section className='mb-6'>
          <h2 className='text-xl font-semibold'>Contact & suggestions</h2>
          <br />
          <p>
            If you have ideas, feature requests, or run into issues, please send
            a message using the form below. The form posts to our contact
            endpoint and is intended for feedback and bug reports. All fields
            are required.
          </p>
          <br />

          <form onSubmit={submit} className='mt-4 max-w-lg w-full'>
            {error && <div className='text-red-600 mb-2'>{error}</div>}
            {success && <div className='text-green-600 mb-2'>{success}</div>}
            <label className='block mb-2'>
              <br />
              <div className='text-sm'>Name</div>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border p-2 w-full'
              />
            </label>
            <label className='block mb-2'>
              <br />
              <div className='text-sm'>Email</div>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border p-2 w-full'
              />
            </label>
            <label className='block mb-4'>
              <br />
              <div className='text-sm'>Message</div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className='border p-2 w-full'
                rows={6}
              />
            </label>
            <div>
              <br />
              <button
                type='submit'
                className='bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto'
              >
                Send message
              </button>
            </div>
          </form>
          <br />
          <br />
        </section>

        {/* CTA: ready to start? Sign in / Sign up - moved under the form */}
        <section className='mb-6'>
          <div className='bg-indigo-50 border border-indigo-100 rounded-lg p-6 text-center'>
            <h2 className='text-xl font-semibold mb-2'>Ready to start?</h2>
            <p className='text-sm text-gray-700 mb-4'>
              Sign in or create an account to sync your gear across devices. You
              can also continue using the app locally without an account.
            </p>

            <div className='flex flex-col md:flex-row justify-center gap-3'>
              <Link
                to='/signin'
                className='bg-white text-indigo-700 border border-indigo-700 px-4 py-2 rounded'
              >
                Sign in
              </Link>

              <Link
                to='/signup'
                className='bg-indigo-600 text-white px-4 py-2 rounded'
              >
                Sign up
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
