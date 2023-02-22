import { Category } from './Category';
export interface Products {
  id?: number,
  name?: string,
  createDate?: Date,
  quantity?: number,
  price?: number,
  priceSale?: number,
  madeIn?: string,
  specifications?: string,
  image?: string,
  detail?: string
  category: Category
}
