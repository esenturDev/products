/* eslint-disable @typescript-eslint/no-unused-vars */

type IdTypes = number;
type Result = {
	_id: IdTypes;
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
};

interface PostBasket {
	_id: IdTypes;
	titleProduct: string;
	price: string;
	photo: string;
	date: string;
}

namespace Basket {
	type GetBasketRequest = void;
	type GetBasketResponse = {
		result: Result[];
	};
	type GetBasketIdrequest = string;
	type GetBasketIdResponse = {
		_id: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
	};

	type PostBasketrequest = {
		_id: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
	};
	type PostBasketResponse = {
		_id: IdTypes;
		titleProduct: string;
		price: string;
		photo: string;
		date: string;
	}[];
}
