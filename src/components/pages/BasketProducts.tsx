import { FC } from "react";
import BasketProductsPages from "./basketProducts/BasketProductsPages";


interface BasketProductsProps {
  isBasket: boolean | null;
}
export const BasketProducts: FC<BasketProductsProps> = ({isBasket}) => {
	return (
		<>
			<BasketProductsPages isBasket={isBasket}/>
		</>
	);
};
