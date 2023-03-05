import axios from 'axios'

export interface ICardsData {
  id: string
  oldPrice: string
  price: string
  title: string
  seen: boolean
  locality: string
  date: number
}

export const api = {
  getCardsData(page: number) {
    return axios.get<ICardsData[]>(
      `https://6075786f0baf7c0017fa64ce.mockapi.io/products?page=${page}&limit=16`
    )
  }
}
