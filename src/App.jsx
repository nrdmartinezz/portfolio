import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import TutorLink from "./pages/TutorLink";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/projects/tutorlink" element={<TutorLink />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
