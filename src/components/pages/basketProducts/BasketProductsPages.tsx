import { FC } from "react";
import scss from "./BasketProductsPages.module.scss";
import { useGetBasketQuery } from "../../../store/api/basket";

const BasketProductsPages: FC<{
	isBasket: boolean | null;
}> = ({ isBasket }) => {
	const { data, isLoading } = useGetBasketQuery();
  console.log(data);
  
	const filtredData = data?.filter((item) => item.isResult === isBasket);
  console.log(filtredData);
  
	return (
		<div>
			<div className="container">
				<div className={scss.content}>
					{isLoading ? (
						<h1>IsLoading...</h1>
					) : (
						filtredData?.map((el) => (
							<div key={el._id}>
								<img src={el.photo} alt={el.titleProduct} />
								<h2>{el.titleProduct}</h2>
								<p>{el.price}</p>
								<p>{el.qeuntyty}</p>
								<p>{el.date}</p>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default BasketProductsPages;
