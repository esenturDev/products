/* eslint-disable @typescript-eslint/no-unused-vars */

type IdTypes = string | number;
type Result = {
	_id: IdTypes;
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
	qeuntyty: string;
};

interface EditBasket {
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
	qeuntyty: string;
}

type PostResult = {
	_id?: IdTypes;
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
	qeuntyty: string;
};

namespace Basket {
	type GetBasketRequest = void;
	type GetBasketResponse = {
		// _id: number;
		// result: Result;
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
	}[];
	type GetBasketIdRequest = string;
	type GetBasketIdResponse = {
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
	};

	type PostBasketRequest = {
		// newData: PostResult
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
	};
	type PostBasketResponse = {
		// newData: PostResult
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
	}[];

	type EditBasketRequest = {
		_id: IdTypes;
		// newData: EditBasket[];
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
	};
	type EditBasketResponse = {
		_id: IdTypes;
		// newData: EditBasket[];
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
	};
}
