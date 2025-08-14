import { createBrowserRouter } from "react-router";
import RootLayout from "../rootLayout/RootLayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import ContactUs from "../pages/Contact/contactUs";
import About from "../pages/About/About";

import BlogDetails from "../pages/Home/BlogDetails";
import Blog from "../pages/Home/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: ContactUs,
      },
      {
        path: "/blog",
        Component: Blog,
      },
      {
        path: "/blog/:id",
        Component: BlogDetails,
      },
      {
        path: "*",
        Component: Error,
      },
    ],
  },
]);
