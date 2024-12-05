import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Project from "./pages/Project";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app-container">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}
export default App;
