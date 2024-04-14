import { FC } from "react";
import Welcome from "./Home/Welcome";

export const Home: FC<{
	isBasket: boolean | null;
	setIsBasket: (value: boolean) => void
}> = ({isBasket, setIsBasket}) => {
	return (
		<>
			<Welcome isBasket={isBasket} setIsBasket={setIsBasket}/>
		</>
	);
};
