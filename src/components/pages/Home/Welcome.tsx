import { Link } from "react-router-dom";
import {
	useDeleteBasketMutation,
	useGetBasketQuery,
	usePutBasketMutation,
} from "../../../store/api/basket";
import scss from "./Welcome.module.scss";
import { FC, useState } from "react";
import CustomInput from "../../Ul/customInpit/CustomInput";
import { CustomButton } from "../../Ul/customButton/CustomButton";

interface WelcomeProps {
	isBasket: boolean | null;
	setIsBasket: (value: boolean) => void;
}

const Welcome: FC<WelcomeProps> = ({isBasket, setIsBasket}) => {
	console.log(isBasket);
	
	const { data: basketProducts = [], isLoading } = useGetBasketQuery();
	
	const [editBasket] = usePutBasketMutation();
	const [deleteBasket] = useDeleteBasketMutation();
	// console.log(basketProducts?.result);
	const [titleProduct, setTitleProduct] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [qeuntyty, setQeuntyty] = useState<string>("");
	const [date, setDate] = useState<string>("");
	const [photo, setPhoto] = useState<string>("");
	const [editResult, setEditResult] = useState<number | null | string>(null);
	
	const handleDeleteProduct = async (id: number | string) => {
		console.log(id);

		await deleteBasket(id);
	};
	function handleItemId(id: number | string) {
		setEditResult(id);
	}
	async function editProduct (_id: number | string) {
		await editBasket({titleProduct, price, qeuntyty, photo, date, _id})
		setEditResult(null)
	}
	const handleBasketTrue = (isBasketResult: boolean) => {
		setIsBasket(!isBasketResult)
		console.log(isBasketResult);
		
	}
	console.log(basketProducts);
	const filtredIsbasket = basketProducts.filter((el) => el.isResult === isBasket);
	return (
		<div className={scss.welcome}>
			<div className="container">
				<div className={scss.content}>
					{isLoading ? (
						<h2>IsLoading...</h2>
					) : (
						basketProducts?.map((item) => (
							<div key={item._id}>
								{editResult === item._id ? (
									<>
										<div>
											<CustomInput
												value={titleProduct}
												onChange={setTitleProduct}
												type="text"
												placeholder="titleProduct"
											/>
											<CustomInput
												type="text"
												value={price}
												placeholder="price"
												onChange={setPrice}
											/>
											<CustomInput
												type="text"
												value={qeuntyty}
												placeholder="qeuntyty..."
												onChange={setQeuntyty}
											/>
											<CustomInput
												type="date"
												value={date}
												placeholder="date..."
												onChange={setDate}
											/>
											<CustomInput
												type="url"
												value={photo}
												placeholder="photos..."
												onChange={setPhoto}
											/>
											<CustomButton onClick={() => setEditResult(null)}>Cancel</CustomButton>
											<CustomButton onClick={() => editProduct(item._id!)}>Same</CustomButton>
										</div>
									</>
								) : (
									<>
										<Link to={`/home/${item._id && item._id}`}>
											<img src={item.photo} alt={item.titleProduct} />
										</Link>
										<h2>{item.titleProduct}</h2>
										<p>{item.price}</p>
										<p>{item.date}</p>
										<CustomButton onClick={() => handleDeleteProduct(item._id!)}>
											delete
										</CustomButton>
										<CustomButton onClick={() => handleItemId(item._id!)}>
											Edit
										</CustomButton>
										<CustomButton onClick={() => handleBasketTrue(item.isResult!)}>Basket</CustomButton>
										{isBasket === true ? (
											<h2>Is Basket True</h2>
										) : (
											<h2>Is Basket False</h2>
										)}
									</>
								)}
							</div>
						))
					)}
					{filtredIsbasket.map((itemEl) => (
						<div key={itemEl._id}>
							<img src={itemEl.photo} alt={itemEl.titleProduct} />
							<p>{itemEl.titleProduct}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Welcome;
