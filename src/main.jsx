import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ShopPage from "./pages/shop-page.jsx";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ShopPage />
	</StrictMode>
);
