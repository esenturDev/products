import { api as index } from "../index";

const api = index.injectEndpoints({
	endpoints: (build) => ({
		getBasket: build.query<Basket.GetBasketResponse, Basket.GetBasketRequest>({
			query: () => ({
				url: "",
				method: "GET",
			}),
			providesTags: ["basket"],
		}),
		getBasketId: build.query<
			Basket.GetBasketIdResponse,
			Basket.GetBasketIdRequest
		>({
			query: (id) => ({
				url: `/${id}`,
				method: "GET",
			}),
			providesTags: ["basket"],
		}),
		postBasket: build.mutation<
			Basket.PostBasketResponse,
			Basket.PostBasketRequest
		>({
			query: (newData) => ({
				url: "",
				method: "POST",
				body: newData,
			}),
			invalidatesTags: ["basket"],
		}),
		deleteBasket: build.mutation({
			query: (id) => ({
				url: `/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["basket"],
		}),
		putBasket: build.mutation<
			Basket.EditBasketResponse,
			Basket.EditBasketRequest
		>({
			query: ({ _id, newData }) => ({
				url: `/${_id}`,
				method: "PUT",
				body: newData,
			}),
			invalidatesTags: ["basket"],
		}),
	}),
});

export const {
	useGetBasketQuery,
	useGetBasketIdQuery,
	usePostBasketMutation,
	useDeleteBasketMutation,
	usePutBasketMutation,
} = api;
