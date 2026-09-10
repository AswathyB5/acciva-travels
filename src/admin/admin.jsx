import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./lib/AuthContext";
import { useAuth } from "./lib/useAuth";
import Login from "./components/Login";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import CollectionEditor from "./components/CollectionEditor";
import PageSections from "./components/PageSections";
import SectionEditor from "./components/SectionEditor";
import Submissions from "./components/Submissions";

const RequireAuth = ({ children }) => {
  const { username, checking } = useAuth();
  if (checking) {
    return <div className="min-h-screen flex items-center justify-center bg-[#0b1926] text-white">Loading...</div>;
  }
  if (!username) return <Navigate to="/admin/login" replace />;
  return children;
};

const AdminRoutes = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route
      path=""
      element={
        <RequireAuth>
          <Layout />
        </RequireAuth>
      }
    >
      <Route index element={<Dashboard />} />
      <Route path="pages/:key" element={<PageSections />} />
      <Route path="pages/:key/:section" element={<SectionEditor />} />
      <Route path="content/:key" element={<CollectionEditor />} />
      <Route path="submissions/:kind" element={<Submissions />} />
    </Route>
  </Routes>
);

const AdminApp = () => (
  <AuthProvider>
    <AdminRoutes />
  </AuthProvider>
);

export default AdminApp;
