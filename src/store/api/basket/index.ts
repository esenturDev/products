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
			query: ({ date, photo, price, qeuntyty, titleProduct }) => ({
				url: "",
				method: "POST",
				body: { date, photo, price, qeuntyty, titleProduct },
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
			query: ({ _id, date, photo, price, qeuntyty, titleProduct }) => ({
				url: `/${_id}`,
				method: "PUT",
				body: { date, photo, price, qeuntyty, titleProduct },
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
