import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Auth/sign-up";
import Login from "./pages/Auth/login";
import Layout from "./layout";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="auth/sign-up" element={<SignUp />} />
        <Route path="auth/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;
