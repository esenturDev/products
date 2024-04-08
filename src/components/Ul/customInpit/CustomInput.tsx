import React, { FC } from "react";
import scss from "./CustomInput.module.scss";
interface CustomInputProps {
	value: string;
	type: string;
	// onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChange: (event: string) => void;
	placeholder?: string;
}

const CustomInput: FC<CustomInputProps> = ({
	value,
	type,
	onChange,
	placeholder,
}) => {
	return (
		<input
			className={scss.inputs}
			type={type}
			value={value}
			onChange={(e) => onChange(e.target.value)}
			placeholder={placeholder}
		/>
	);
};

export default CustomInput;
