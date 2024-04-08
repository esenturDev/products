import { useGetBasketIdQuery } from "../../../store/api/basket";
import scss from "./ProductId.module.scss";
import { useParams } from "react-router";
export const ProductId = () => {
	const { id } = useParams();
	const { data, isLoading } = useGetBasketIdQuery(id!);
	return (
		<div className={scss.ProductId}>
			<div className="container">
				<div className={scss.content}>
					<div>
						{isLoading ? (
							<h2>IsLoading...</h2>
						) : (
							<>
								<img src={data?.photo} alt={data?.titleProduct} />
								<h2>{data?.titleProduct}</h2>
								<p>{data?.price}</p>
								<p>{data?.date}</p>
							</>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
