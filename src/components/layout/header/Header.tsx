/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import scss from "./Header.module.scss";
import { CustomButton } from "../../Ul/customButton/CustomButton";
import { createPortal } from "react-dom";
import { Modal } from "../../Ul/Modal/Modal";
import CustomInput from "../../Ul/customInpit/CustomInput";
import { usePostBasketMutation } from "../../../store/api/basket";

interface PostTypeProps {
  _id?: number;
  titleProduct: string;
	price: string;
	photo: string;
	date: string;
  qeuntyty: string
}[]
const Header = () => {
  const [postBasket] =  usePostBasketMutation();
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [titleProduct, setTitleProduct] = useState<string>("");
	const [price, setPrice] = useState<string>("");
	const [qeuntyty, setQeuntyty] = useState<string>("");
	const [photo, setPhoto] = useState<string>("");
	const [date, setDate] = useState<string>("");
  
  const addProduct = async () => {
    // const newData: PostTypeProps = {
    //   titleProduct: titleProduct,
    //   price: price,
    //   photo: photo,
    //   date: date,
    //   qeuntyty: qeuntyty,
		// 	// _id: 1
    // }
    await postBasket({titleProduct, price, photo, date, qeuntyty, })
  }
	return (
		<>
			<header>
				<div className="container">
					<div className={scss.content}>
						<CustomButton onClick={() => setOpenModal(true)}>
							Add product
						</CustomButton>
					</div>
				</div>
			</header>
			{openModal &&
				createPortal(
					<Modal onClone={setOpenModal}>
						<div>
							<CustomInput
								type="text"
								value={titleProduct}
								placeholder="titleProduct"
								onChange={setTitleProduct}
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
              <CustomButton onClick={addProduct}>Add</CustomButton>
						</div>
					</Modal>,
					document.getElementById("modal") as any
				)}
		</>
	);
};

export default Header;
