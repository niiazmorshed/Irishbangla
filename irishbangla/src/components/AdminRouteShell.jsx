import AdminLayout from "./AdminLayout";
import { AuthProvider } from "../contexts/AuthContext";

export default function AdminRouteShell() {
  return (
    <AuthProvider>
      <AdminLayout />
    </AuthProvider>
  );
}
