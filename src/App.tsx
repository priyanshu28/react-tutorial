import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFoundPage from "./pages/NotFoundPage";
import Restaurant from "./pages/Restaurant";

/* =======

// Way to create an element in React, we use React librabry (element, props, Children(s) for the element)
const heading = React.createElement("h1", {}, "Hello World React!!");
OR
const heading = React.createElement("h1", {}, [Component1, Component2]);

// Way to create root of React App, we use ReactDOM 
const root = ReactDOM.createRoot(document.getElementById("root"));

// Way to render an element inside the root
root.render(heading);

=========== */

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

export default App;

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <Restaurant />,
      },
    ],
    errorElement: <NotFoundPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
