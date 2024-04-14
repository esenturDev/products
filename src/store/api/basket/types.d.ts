/* eslint-disable @typescript-eslint/no-unused-vars */

type IdTypes = string | number;
type Result = {
	_id: IdTypes;
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
	qeuntyty: string;
	isResult? :boolean
};

interface EditBasket {
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
	qeuntyty: string;
	isResult?: boolean
}

type PostResult = {
	_id?: IdTypes;
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
	qeuntyty: string;
	isResult?: boolean
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
		isResult?:boolean
	}[];
	type GetBasketIdRequest = string;
	type GetBasketIdResponse = {
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
		isResult?:boolean
	};

	type PostBasketRequest = {
		// newData: PostResult
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
		isResult?:boolean
	};
	type PostBasketResponse = {
		// newData: PostResult
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
		isResult?: boolean;
	}[];

	type EditBasketRequest = {
		_id: IdTypes;
		// newData: EditBasket[];
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
		isResult?: boolean
	};
	type EditBasketResponse = {
		_id: IdTypes;
		// newData: EditBasket[];
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
		qeuntyty: string;
		isResult?: boolean;
	};
}
