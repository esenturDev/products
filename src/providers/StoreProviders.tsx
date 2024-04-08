import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
interface StoreProvidersProps {
	children: ReactNode;
}
const StoreProviders: FC<StoreProvidersProps> = ({ children }) => {
	return (
		<>
			<Provider store={store}>{children}</Provider>
		</>
	);
};

export default StoreProviders;
