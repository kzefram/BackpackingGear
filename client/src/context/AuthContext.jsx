// Authentication removed: Sign-in / Sign-up flows are not used in this build.
// Keep a minimal provider stub so imports won't break if reintroduced.
import React from "react";

export const AuthContext = null;

export function AuthProvider({ children }) {
  return <>{children}</>;
}

export default AuthProvider;
