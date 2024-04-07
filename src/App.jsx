import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout";
import routes from "../routes";

function App() {
  return (
    <Routes>
      <Route path="*" element={<Layout />}>
        <Route index element={<Home />} />
        {routes.map((route, index) => (
          <Route path={`${route.path}`} element={route.element} key={index} />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
