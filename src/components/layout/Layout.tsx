// import { useState } from "react";
import { ErrorPages } from "../pages/ErrorPages";
import { Home } from "../pages/Home";
import ProductItemId from "../pages/ProductItemId";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
export const Layout = () => {
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/home/:id" element={<ProductItemId />} />
					<Route path="*" element={<ErrorPages />} />
				</Routes>
			</main>
		</div>
	);
};
