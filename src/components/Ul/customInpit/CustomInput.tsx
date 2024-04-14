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
	console.log(onChange);
	console.log(value);
	
	return (
		<input
			className={scss.inputs}
			type={type}
			value={value}
			onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
			placeholder={placeholder}
		/>
	);
};

export default CustomInput;
