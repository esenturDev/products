import { useState } from "react";
import { ErrorPages } from "../pages/ErrorPages";
import { Home } from "../pages/Home";
import ProductItemId from "../pages/ProductItemId";
import scss from "./Layout.module.scss";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import { BasketProducts } from "../pages/BasketProducts";
export const Layout = () => {
	const [isBasket, setIsBasket] = useState<boolean | null>(null)
	return (
		<div className={scss.layout}>
			<Header />
			<main>
				<Routes>
					<Route path="/home" element={<Home setIsBasket={setIsBasket} isBasket={isBasket}/>} />
					<Route path="/home/:id" element={<ProductItemId />} />
					<Route path="/BasketProducts" element={<BasketProducts isBasket={isBasket}/>} />
					<Route path="*" element={<ErrorPages />} />
				</Routes>
			</main>
		</div>
	);
};
