import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Truck, AlertCircle } from "lucide-react";
import { useAuth } from "../lib/useAuth";

const Login = () => {
  const { username: loggedInUsername, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (loggedInUsername) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await login(username, password);
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-navy px-4 relative overflow-hidden">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-sand/10 blur-3xl" />

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-8 space-y-6"
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-14 h-14 rounded-2xl bg-teal flex items-center justify-center mb-4 shadow-lg shadow-teal/30">
            <Truck size={26} className="text-white" />
          </div>
          <h1 className="font-display text-xl font-bold text-navy">Acciva Admin</h1>
          <p className="text-sm text-navy/50 mt-1">Sign in to manage your site content.</p>
        </div>

        {error && (
          <p className="flex items-center gap-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-3.5 py-2.5">
            <AlertCircle size={16} className="shrink-0" />
            {error}
          </p>
        )}

        <div>
          <label className="block text-xs font-semibold text-navy/60 mb-1.5">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded-xl border border-navy/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
            autoComplete="username"
            autoFocus
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-navy/60 mb-1.5">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl border border-navy/15 px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal"
            autoComplete="current-password"
            required
          />
        </div>

        <button
          type="submit"
          disabled={busy}
          className="w-full rounded-xl bg-navy text-white text-sm font-semibold py-3 hover:bg-midnight transition-colors disabled:opacity-60 shadow-lg shadow-navy/20"
        >
          {busy ? "Signing in..." : "Sign in"}
        </button>
      </form>
    </div>
  );
};

export default Login;
