import {api as index} from '../index';

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getBasket: build.query<Basket.GetBasketResponse, Basket.GetBasketRequest>({
      query: () => ({
        url: "",
        method: "GET",
      }),
      providesTags: ['basket'],
    }),
    getBasketId: build.query<Basket.GetBasketIdResponse, Basket.GetBasketIdrequest>({
      query: (id) => ({
        url: `/${id}`,
        method: "GET",
      }),
      providesTags: ['basket'],
    })
  })
})

export const {useGetBasketQuery, useGetBasketIdQuery} = api;