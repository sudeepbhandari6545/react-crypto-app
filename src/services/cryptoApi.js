import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoHeaders = {
  'X-RapidAPI-Key': '0f97bce091msh351f86dfc427340p14a44ejsn202cb4d858cc',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}
const baseUrl = 'https://coinranking1.p.rapidapi.com/'
const createRequest = (url) => ({ url, headers: cryptoHeaders })

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptoDetail: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history/${timePeriod}`),
    }),
    getCryptoExchange: builder.query({
      query: (coinId) => createRequest(`coin/${coinId}/exchanges`),
    }),
  }),
})

export const {
  useGetCryptosQuery,
  useGetCryptoDetailQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoExchangeQuery,
} = cryptoApi
