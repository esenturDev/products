import React, { FC } from "react";
import scss from "./CustomInput.module.scss";
interface CustomInputProps {
	value: string;
	type: string;
	setData: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
}

const CustomInput: FC<CustomInputProps> = ({
	value,
	type,
	setData,
	placeholder,
}) => {
	return (
		<input
			className={scss.inputs}
			type={type}
			value={value}
			onChange={setData}
			placeholder={placeholder}
		/>
	);
};

export default CustomInput;
