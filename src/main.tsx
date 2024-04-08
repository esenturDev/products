import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import StoreProviders from "./providers/StoreProviders.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<StoreProviders>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</StoreProviders>
	</React.StrictMode>
);
