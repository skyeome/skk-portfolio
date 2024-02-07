import { Route, Routes } from "react-router-dom";
import Layout from "@/components/common/Layout";
import Home from "@/pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="works" element={<Works />} />
        <Route path="works/:id" element={<Works />} />
      </Route>
    </Routes>
  );
}

export default App;
