import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import About from "../pages/about/About";
// import Home from "../pages/home/home/Home";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main></Main>,
//     children: [
//       {
//         path: "/",
//         element: <Home></Home>,
//       },
//       {
//         path: "/about",
//         element: <About></About>,
//       },
//     ],
//   },
// ]);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);
export default router;
