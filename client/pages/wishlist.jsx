import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSettings } from "../src/context/SettingsContext";

export default function Wishlist() {
  const location = useLocation();
  const [items, setItems] = useState([]);
  const [showAdd, setShowAdd] = useState(false);
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({ name: "", weight: "" });

  const STORAGE_KEY = "wishlist_items";

  // Keep storage in grams internally; display according to selected units
  const { units } = useSettings();
  const totalWeight = items.reduce(
    (sum, it) => sum + (Number(it.weight) || 0),
    0
  );
  const formatWeight = (grams) => {
    const g = Number(grams) || 0;
    if (units === "imperial") {
      const lbs = g * 0.00220462262185;
      return `${lbs.toFixed(2)} lb`;
    }
    return `${(g / 1000).toFixed(2)} kg`;
  };

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  function addItem(e) {
    e.preventDefault();
    if (!name) return;
    // weight input may be kg or lb depending on units; store as grams
    const raw = Number(weight || 0) || 0;
    const grams =
      units === "imperial"
        ? Math.round(raw * 453.59237)
        : Math.round(raw * 1000);
    const it = {
      id: Date.now().toString(),
      name,
      weight: grams,
      favorited: false,
    };
    setItems((prev) => [it, ...prev]);
    setName("");
    setWeight("");
    setShowAdd(false);
  }

  function toggleFavorite(id) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id ? { ...it, favorited: !it.favorited } : it
      )
    );
  }

  function deleteItem(id) {
    setItems((prev) => prev.filter((it) => it.id !== id));
  }

  function startEdit(it) {
    setEditingId(it.id);
    setEditValues({
      name: it.name || "",
      weight: it.weight
        ? units === "imperial"
          ? (Number(it.weight) / 453.59237).toString()
          : (Number(it.weight) / 1000).toString()
        : "",
    });
  }

  function saveEdit(id) {
    setItems((prev) =>
      prev.map((it) =>
        it.id === id
          ? {
              ...it,
              name: editValues.name,
              // convert input back to grams depending on units
              weight:
                units === "imperial"
                  ? Math.round((Number(editValues.weight) || 0) * 453.59237)
                  : Math.round((Number(editValues.weight) || 0) * 1000),
            }
          : it
      )
    );
    setEditingId(null);
    setEditValues({ name: "", weight: "" });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditValues({ name: "", weight: "" });
  }

  return (
    <>
      {/* Lake banner for Wishlist page */}
      <div
        className='w-full relative bg-center bg-cover h-44 md:h-64 lg:h-80'
        style={{ backgroundImage: "url('/images/lake-banner.jpg')" }}
        role='img'
        aria-label='Lake banner'
      >
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

      <div className='max-w-6xl mx-auto p-4'>
        <br />
        <br />
        <br />
        <br />
        <div className='flex gap-6 mb-6 justify-center'>
          <Link
            to='/gear'
            aria-label='My Gear'
            className={`flex items-center gap-4 md:gap-5 px-10 md:px-24 py-5 md:py-12 rounded-xl text-2xl md:text-4xl font-semibold md:font-bold ${
              location.pathname === "/gear"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7 md:h-12 md:w-12'
              viewBox='0 0 20 20'
              fill='none'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M11.3 1.046a1 1 0 00-2.6 0l-.287.8a1 1 0 01-.95.682l-.85.03a1 1 0 00-.682.95l.03.85a1 1 0 01-.682.95l-.8.287a1 1 0 000 2.6l.8.287a1 1 0 01.682.95l-.03.85a1 1 0 00.682.95l.85.03a1 1 0 01.95.682l.287.8a1 1 0 002.6 0l.287-.8a1 1 0 01.95-.682l.85-.03a1 1 0 00.682-.95l-.03-.85a1 1 0 01.682-.95l.8-.287a1 1 0 000-2.6l-.8-.287a1 1 0 01-.682-.95l.03-.85a1 1 0 00-.682-.95l-.85-.03a1 1 0 01-.95-.682l-.287-.8z'
              />
              <circle cx='10' cy='10' r='2' strokeWidth='1.5' />
            </svg>
            <span>My Gear</span>
          </Link>

          <Link
            to='/wishlist'
            aria-label='Wishlist'
            className={`flex items-center gap-4 md:gap-5 px-10 md:px-24 py-5 md:py-12 rounded-xl text-2xl md:text-4xl font-semibold md:font-bold ${
              location.pathname === "/wishlist"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7 md:h-12 md:w-12'
              viewBox='0 0 20 20'
              fill='none'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 18.343 3.172 11.828a4 4 0 010-6.656z'
              />
            </svg>
            <span>Wishlist</span>
          </Link>
        </div>
        <br />
        <br />
        <div className='mb-4'>
          <div className='flex justify-between items-center'>
            <div>
              <div className='text-base md:text-2xl text-gray-600'>
                Showing{" "}
                <span className='font-semibold md:text-2xl'>
                  {items.length}
                </span>{" "}
                items
              </div>
              <div className='text-base md:text-2xl text-gray-600'>
                Total wishlist weight:{" "}
                <span className='font-bold text-xl md:text-2xl'>
                  {formatWeight(totalWeight)}
                </span>
              </div>
            </div>
            <div>
              <button
                onClick={() => setShowAdd((s) => !s)}
                className='bg-indigo-600 text-white px-5 py-3 rounded-full text-base md:text-lg'
              >
                Add item
              </button>
            </div>
          </div>
        </div>

        <br />

        {showAdd && (
          <form onSubmit={addItem} className='mb-4 border p-4 rounded bg-white'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
              <input
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='border p-2'
              />
              <input
                placeholder={
                  units === "imperial" ? "Weight (lb)" : "Weight (kg)"
                }
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className='border p-2'
              />
            </div>
            <div className='mt-3 flex gap-2'>
              <button
                type='submit'
                className='bg-green-600 text-white px-3 py-1 rounded'
              >
                Save
              </button>
              <button
                type='button'
                onClick={() => setShowAdd(false)}
                className='px-3 py-1 border rounded'
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        {items.length === 0 ? (
          <div className='p-8 border-dashed border-2 border-gray-200 rounded text-center text-gray-600'>
            Your wishlist is empty! Tap Add item to add your first wishlist
            item.
          </div>
        ) : (
          <div className='space-y-3'>
            {items.map((it) => (
              <div
                key={it.id}
                className='p-3 bg-white border rounded flex justify-between items-center'
              >
                {editingId === it.id ? (
                  <>
                    <div className='flex-1'>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                        <input
                          className='border p-2'
                          value={editValues.name}
                          onChange={(e) =>
                            setEditValues((v) => ({
                              ...v,
                              name: e.target.value,
                            }))
                          }
                        />
                        <input
                          className='border p-2'
                          value={editValues.weight}
                          onChange={(e) =>
                            setEditValues((v) => ({
                              ...v,
                              weight: e.target.value,
                            }))
                          }
                        />
                      </div>
                    </div>
                    <div className='flex gap-2 items-center ml-4'>
                      <button
                        onClick={() => saveEdit(it.id)}
                        className='bg-green-600 text-white px-3 py-1 rounded'
                      >
                        Save
                      </button>
                      <button
                        onClick={cancelEdit}
                        className='px-3 py-1 border rounded'
                      >
                        Cancel
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className='font-semibold'>{it.name}</div>
                      <div className='text-sm text-gray-600'>
                        {formatWeight(it.weight)}
                      </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                      <button
                        onClick={() => toggleFavorite(it.id)}
                        className={`px-2 py-1 rounded ${
                          it.favorited ? "bg-yellow-300" : "bg-gray-100"
                        }`}
                      >
                        ★
                      </button>
                      <button
                        onClick={() => startEdit(it)}
                        className='px-2 py-1 border rounded'
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteItem(it.id)}
                        className='px-2 py-1 rounded bg-red-100 text-red-700'
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
        <br />
        <br />
      </div>
    </>
  );
}
