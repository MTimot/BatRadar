import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import "./App.css";
import App from "./App"
// import NavBar from "./components/NavBar/NavBar.tsx";
// import Footer from "./components/Footer/footer.tsx";
// import BatJournal from "./components/BatJournal/BatJournal.tsx";
// import Cards from "./components/cards/cards";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Journal",
        element: <Journal />,
      },
    ],
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}