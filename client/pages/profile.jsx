import React, { useEffect, useState } from "react";
import { useSettings } from "../src/context/SettingsContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { units, setUnits } = useSettings();
  const navigate = useNavigate();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("tt_token") : null;
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user_profile");
      if (raw) {
        const p = JSON.parse(raw);
        if (p.email) setEmail(p.email);
      }
    } catch {
      // ignore
    }
  }, []);

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  function validateEmail(e) {
    // simple validation
    return /\S+@\S+\.\S+/.test(e);
  }

  function saveProfile(e) {
    e.preventDefault();
    setMessage(null);
    if (!validateEmail(email)) {
      setMessage({ type: "error", text: "Please enter a valid email." });
      return;
    }

    if (!token) {
      setMessage({
        type: "error",
        text: "You must sign in to save email/password. Please sign in or sign up.",
      });
      return;
    }

    // load existing profile
    let existing = {};
    try {
      const raw = localStorage.getItem("user_profile");
      if (raw) existing = JSON.parse(raw);
    } catch {
      existing = {};
    }

    // if changing password, validate
    if (newPassword) {
      if (newPassword.length < 6) {
        setMessage({
          type: "error",
          text: "New password must be at least 6 characters.",
        });
        return;
      }
      if (newPassword !== confirmPassword) {
        setMessage({
          type: "error",
          text: "New password and confirm do not match.",
        });
        return;
      }
      // if existing password present, require currentPassword to match
      if (existing.password && currentPassword !== existing.password) {
        setMessage({ type: "error", text: "Current password is incorrect." });
        return;
      }
    }

    const profile = {
      email,
      // NOTE: storing plaintext password is only for local-demo; real apps must hash & use server-side storage
      password: newPassword ? newPassword : existing.password || null,
    };
    try {
      localStorage.setItem("user_profile", JSON.stringify(profile));
      setMessage({ type: "success", text: "Profile saved locally." });
      // clear password inputs
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch {
      setMessage({ type: "error", text: "Failed to save profile." });
    }
  }

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h2 className='text-2xl font-semibold mb-4'>Profile</h2>

      <form onSubmit={saveProfile} className='space-y-4'>
        <div>
          <label className='block mb-1'>Email</label>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full border p-2'
            required
          />
        </div>

        <div>
          <label className='block mb-1'>
            Current password (leave blank if none)
          </label>
          <input
            type='password'
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className='w-full border p-2'
          />
        </div>

        <div>
          <label className='block mb-1'>New password</label>
          <input
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='w-full border p-2'
          />
        </div>

        <div>
          <label className='block mb-1'>Confirm new password</label>
          <input
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='w-full border p-2'
          />
        </div>

        <div>
          <label className='block mb-1'>Preferred units</label>
          <select
            className='border p-2'
            value={units}
            onChange={(e) => setUnits(e.target.value)}
          >
            <option value='metric'>Metric (kg)</option>
            <option value='imperial'>Imperial (lb)</option>
          </select>
        </div>

        <div className='flex items-center gap-3'>
          <button className='bg-indigo-600 text-white px-4 py-2 rounded'>
            Save profile
          </button>
          {message && (
            <div
              className={`text-sm ${
                message.type === "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.text}
            </div>
          )}
        </div>
      </form>

      <div className='mt-6 text-sm text-gray-600'>
        {token ? (
          <p>Signed in: demo user (placeholder)</p>
        ) : (
          <div>
            <p className='mb-2'>
              You are not signed in. Sign in or sign up to save email and
              password to your account.
            </p>
            <div className='flex gap-2'>
              <button
                onClick={() => navigate("/signin")}
                className='bg-gray-200 px-3 py-1 rounded'
              >
                Sign in
              </button>
              <button
                onClick={() => navigate("/signup")}
                className='bg-gray-200 px-3 py-1 rounded'
              >
                Sign up
              </button>
            </div>
          </div>
        )}
        <p className='mt-2'>
          Note: this app currently stores profile data locally for the demo.
          When we add a server, email and password changes will be sent to your
          account on the server instead.
        </p>
      </div>
    </div>
  );
}
