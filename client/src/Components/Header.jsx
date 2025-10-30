import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSettings } from "../context/SettingsContext";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [gearOpen, setGearOpen] = useState(false);
  const { category, setCategory } = useSettings();
  const navigate = useNavigate();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("tt_token") : null;

  return (
    <div className='bg-slate-300'>
      <div className='max-w-6xl mx-auto p-3'>
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'>
            <h1 className='font-bold text-lg md:text-xl'>
              Backpacking Gear Inventory
            </h1>
          </Link>
          <button
            className='md:hidden p-2 rounded bg-gray-200'
            aria-label='Toggle menu'
            onClick={() => setOpen((s) => !s)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
          <nav className={`hidden md:flex items-center gap-4`}>
            <Link to='/home'>Home</Link>
            <div
              className='relative'
              onMouseEnter={() => setGearOpen(true)}
              onMouseLeave={() => setGearOpen(false)}
            >
              <Link to='/gear' className='cursor-pointer'>
                My Gear ▾
              </Link>
              {gearOpen && (
                <div className='absolute right-0 mt-2 bg-white border rounded shadow p-2 z-50'>
                  <button
                    className={`block text-left px-3 py-1 ${
                      category === "backpacking" ? "font-bold" : ""
                    }`}
                    onClick={() => {
                      setCategory("backpacking");
                      navigate("/gear");
                    }}
                  >
                    Backpacking
                  </button>
                  <button className='block text-left px-3 py-1 opacity-60 cursor-not-allowed'>
                    Hiking
                  </button>
                  <button className='block text-left px-3 py-1 opacity-60 cursor-not-allowed'>
                    Camping
                  </button>
                  <button className='block text-left px-3 py-1 opacity-60 cursor-not-allowed'>
                    Canoeing
                  </button>
                  <button className='block text-left px-3 py-1 opacity-60 cursor-not-allowed'>
                    Kayaking
                  </button>
                </div>
              )}
            </div>
            <Link to='/wishlist'>Wishlist</Link>
            <Link to='/about'>About</Link>
            {/* Units selector moved to Profile page */}
            <Link to='/profile'>Profile</Link>
            {token ? (
              <Link to='/signout'>Sign out</Link>
            ) : (
              <>
                <Link to='/signin'>Sign in</Link>
                <Link to='/signup'>Sign up</Link>
              </>
            )}
          </nav>
        </div>
        {open && (
          <div className='md:hidden mt-3 flex flex-col gap-2'>
            <div className='border rounded p-2'>
              <div className='mb-2 font-semibold'>My Gear</div>
              <div className='flex flex-col'>
                <button
                  onClick={() => {
                    setCategory("backpacking");
                    setOpen(false);
                    navigate("/gear");
                  }}
                  className='text-left p-1 font-bold'
                >
                  Backpacking
                </button>
                <button className='text-left p-1 opacity-60 cursor-not-allowed'>
                  Hiking
                </button>
                <button className='text-left p-1 opacity-60 cursor-not-allowed'>
                  Camping
                </button>
                <button className='text-left p-1 opacity-60 cursor-not-allowed'>
                  Canoeing
                </button>
                <button className='text-left p-1 opacity-60 cursor-not-allowed'>
                  Kayaking
                </button>
              </div>
            </div>

            <Link
              to='/wishlist'
              onClick={() => setOpen(false)}
              className='block p-2 bg-gray-100 rounded'
            >
              Wishlist
            </Link>
            <Link
              to='/about'
              onClick={() => setOpen(false)}
              className='block p-2 bg-gray-100 rounded'
            >
              About
            </Link>
            <Link
              to='/home'
              onClick={() => setOpen(false)}
              className='block p-2 bg-gray-100 rounded'
            >
              Home
            </Link>
            <Link
              to='/profile'
              onClick={() => setOpen(false)}
              className='block p-2 bg-gray-100 rounded'
            >
              Profile
            </Link>

            {token ? (
              <Link
                to='/signout'
                onClick={() => setOpen(false)}
                className='block p-2 bg-gray-100 rounded'
              >
                Sign out
              </Link>
            ) : (
              <>
                <Link
                  to='/signin'
                  onClick={() => setOpen(false)}
                  className='block p-2 bg-gray-100 rounded'
                >
                  Sign in
                </Link>
                <Link
                  to='/signup'
                  onClick={() => setOpen(false)}
                  className='block p-2 bg-gray-100 rounded'
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
