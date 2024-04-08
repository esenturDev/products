import { FC, ReactNode } from "react";
import scss from "./CustomButton.module.scss";

type CustomButtonProps = {
	children: ReactNode;
	onClick: () => void;
};

export const CustomButton: FC<CustomButtonProps> = ({ children, onClick }) => {
	return (
		<button className={scss.buttons} onClick={onClick}>
			{children}
		</button>
	);
};
