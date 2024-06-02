import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
  const [view, setView] = useState("login");

  return (
    <>
      {view === "login" && (
        <Login
          onToRegister={() => setView("register")}
          onSignIn={() => setView("dashboard")}
        />
      )}

      {view === "register" && (
        <Register
          onToSignIn={() => setView("login")}
          onRegister={() => setView("dashboard")}
        />
      )}

      {view === "dashboard" && <Dashboard onSignOut={() => setView("login")} />}
    </>
  );
}

export default App;
