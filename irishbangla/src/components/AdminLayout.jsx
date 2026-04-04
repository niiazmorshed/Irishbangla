import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { ADMIN_CONSOLE_PATH } from "../constants/adminRoute";
import "../styles/AdminConsole.css";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate(ADMIN_CONSOLE_PATH, { replace: true });
  };

  useEffect(() => {
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <span className="admin-topbar-title">Internal — Visa tracker</span>
        {user && (
          <button type="button" className="admin-topbar-logout" onClick={handleLogout}>
            Sign out
          </button>
        )}
      </header>
      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}
