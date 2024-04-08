import { Link } from "react-router-dom";
import { useGetBasketQuery } from "../../../store/api/basket";
import scss from "./Welcome.module.scss";
const Welcome = () => {
	const { data: basketProducts = [], isLoading } = useGetBasketQuery();
  // console.log(basketProducts?.result);
  
	return (
		<div className={scss.welcome}>
			<div className="container">
				<div className={scss.content}>
					{isLoading ? (
						<h2>IsLoading...</h2>
					) : (
						basketProducts?.map((item) => (
							<div key={item.result._id}>
								<Link to={`/${item.result._id}`}>
									<img src={item.result.photo} alt={item.result.titleProduct} />
								</Link>
								<h2>{item.result.titleProduct}</h2>
								<p>{item.result.price}</p>
								<p>{item.result.date}</p>
							</div>
						))
					)}
          
				</div>
			</div>
		</div>
	);
};

export default Welcome;
