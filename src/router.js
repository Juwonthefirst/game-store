import { createBrowserRouter } from "react-router";
import ShopPage from "./pages/shop-page.jsx";
import Layout from './pages/layout.jsx'


const router = createBrowserRouter([
	{
		path: "/",
		Component: Layout,
		children: [{ index: true, Component: ShopPage }],
	},
]);

export default router;
