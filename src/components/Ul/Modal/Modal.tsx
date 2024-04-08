import { FC, ReactNode } from "react";
import scss from "./Modal.module.scss";

export const Modal: FC<{
	children: ReactNode;
	onClone: (result: boolean) => void;
}> = ({ children, onClone }) => {
	return (
		<div onClick={() => onClone(false)} className={scss.containerModal}>
			<div className={scss.contentModal}>{children}</div>
		</div>
	);
};
