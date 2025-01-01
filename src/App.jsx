import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home";
import Project from "./pages/Project";
import TutorLink from "./pages/TutorLink";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route
        path="/project/tutorlink"
        element={<TutorLink></TutorLink>}
      ></Route>
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
