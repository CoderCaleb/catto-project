import "./styles/globals.scss";

import { render } from "preact";
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Home from "./pages/home.jsx";
import Generate from "./pages/generate.jsx";
import NotFound from "./pages/notFound.jsx";
import { consoleCat } from "./lib/consoleCat.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
consoleCat();
gsap.registerPlugin(ScrollTrigger);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="generate" element={<Generate />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  ),
  { basename: "/catto-project" }
);

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />{" "}
    </>
  );
};

render(<App />, document.body);
