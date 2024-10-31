import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Home from "./pages/home.tsx";
import Journal from "./pages/Journal.tsx";
import Article from "./pages/Article.tsx";



const getWeatherOfTheDay = () => {
	return "sunny";
};

const allData = [
	{
		id: 1,
		title: "Lorem Ipsum",
		content: "Lorem ipsum dolor sit amet",
	},
	{
		id: 2,
		title: "Schnapsum",
		content: "Lorem Elsass ipsum Salut bisamme",
	},
	{
		id: 3,
		title: "Cupcake Ipsum",
		content: "Tiramisu pastry wafer brownie soufflé",
	},
];

type Data = (typeof allData)[0];

const getSomeData = (id: number) => {
	return allData.find((article) => article.id === id) as Data | null;
};


const router = createBrowserRouter([
	{
		element: <App />,
		loader: () => {
			return getWeatherOfTheDay();
		},
		id: "app",
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/Journal",
				element: <Journal />,
			},
			{
				path: "/articles/:id",
				element: <Article />,
        loader: ({ params }) => {
          const idAsInt = parseInt(params.id ?? "0");

          return getSomeData(idAsInt);
        },
			},
		],
	},
]);

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
