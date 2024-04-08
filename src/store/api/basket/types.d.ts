/* eslint-disable @typescript-eslint/no-unused-vars */

type IdTypes = number;
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
  qeuntyty: string
}

namespace Basket {
	type GetBasketRequest = void;
	type GetBasketResponse = {
    _id: number;
		result: Result;
	}[];
	type GetBasketIdRequest = string;
	type GetBasketIdResponse = {
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
    qeuntyty: string
	};

	type PostBasketRequest = {
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
    qeuntyty: string
	};
	type PostBasketResponse = {
		_id?: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
    qeuntyty: string
	}[];

	type EditBasketRequest = {
		_id: IdTypes;
		newData: EditBasket[];
	};
	type EditBasketResponse = {
		_id: IdTypes;
		newData: EditBasket[];
	};
}
