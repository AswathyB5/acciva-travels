import { useEffect, useState } from "react";
import { api, getToken, setToken } from "./api";
import { AuthContext } from "./authContextObject";

export function AuthProvider({ children }) {
  const [username, setUsername] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!getToken()) {
      Promise.resolve().then(() => setChecking(false));
      return;
    }
    api
      .me()
      .then((data) => setUsername(data.username))
      .catch(() => setToken(null))
      .finally(() => setChecking(false));
  }, []);

  const login = async (user, password) => {
    const data = await api.login(user, password);
    setToken(data.token);
    setUsername(data.username);
  };

  const logout = () => {
    setToken(null);
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, checking, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
