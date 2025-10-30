import React from "react";
import { Link } from "react-router-dom";
// Local hero image placed by user in `client/src/assets`
// Original Unsplash URL: https://unsplash.com/photos/zK049OFP4uI
import kayakImg from "../src/assets/filip-mroz-zK049OFP4uI-unsplash.jpg";

export default function Home() {
  return (
    <div>
      <section className='relative h-[60vh] flex items-center'>
        {/* Using local import ensures the bundler serves the image reliably */}
        <img
          src={kayakImg}
          alt='Kayak on water'
          className='absolute inset-0 w-full h-full object-cover'
          style={{ transform: "scaleX(-1)" }}
        />
        <div className='absolute inset-0 bg-black/40'></div>
        <div className='relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8'>
          <div className='text-white md:w-1/2'>
            <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>
              Backpacking Gear Tracker
            </h1>
            <p className='mt-4 text-lg md:text-xl text-gray-100/90'>
              Keep an inventory of your pack, track item weights, and plan your
              wishlist — all in one simple app.
            </p>
            <div className='mt-6 flex gap-3'>
              <Link
                to='/gear'
                className='bg-indigo-600 text-white px-5 py-3 rounded shadow'
              >
                View My Gear
              </Link>
              <Link
                to='/wishlist'
                className='bg-white text-indigo-700 px-5 py-3 rounded shadow'
              >
                Start a Wishlist
              </Link>
            </div>
          </div>
          <div className='md:w-1/2 hidden md:block'>
            {/* decorative area; image is background of the section */}
          </div>
        </div>
        <div className='absolute bottom-3 right-3 text-xs text-white/80 z-20'>
          Photo:{" "}
          <a
            className='underline'
            href='https://unsplash.com/photos/zK049OFP4uI'
            target='_blank'
            rel='noreferrer'
          >
            Unsplash
          </a>
        </div>
      </section>

      <main className='max-w-6xl mx-auto p-6'>
        <br />
        <section className='mt-8 grid md:grid-cols-3 gap-6'>
          <div className='p-4 border rounded'>
            <h3 className='font-semibold mb-2'>Organize your gear</h3>
            <p className='text-sm text-gray-600'>
              Add items, weights, and categories so you always know what's in
              your pack.
            </p>
          </div>
          <div className='p-4 border rounded'>
            <h3 className='font-semibold mb-2'>Plan smarter</h3>
            <p className='text-sm text-gray-600'>
              Use the wishlist to plan future purchases and see total weight
              impact.
            </p>
          </div>
          <div className='p-4 border rounded'>
            <h3 className='font-semibold mb-2'>Sync later</h3>
            <p className='text-sm text-gray-600'>
              This demo currently stores data locally. We'll add server sync to
              save across devices.
            </p>
          </div>
        </section>
        <br />
      </main>
    </div>
  );
}
