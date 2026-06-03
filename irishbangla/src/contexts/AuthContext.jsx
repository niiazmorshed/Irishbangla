import { useEffect, useMemo, useState } from "react";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebase";
import { isEmailAllowedForAdmin } from "../auth/adminAllowlist";
import { AuthContext } from "./authStore";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      auth,
      async login(email, password) {
        const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
        if (!isEmailAllowedForAdmin(cred.user.email)) {
          await signOut(auth);
          throw new Error("This account is not authorised for admin access.");
        }
        return cred.user;
      },
      async logout() {
        await signOut(auth);
      },
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
