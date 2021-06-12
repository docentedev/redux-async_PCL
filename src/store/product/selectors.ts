import { Selectors } from "../types"
import { Product } from "./types"

export const productGetAllSelector = (s: any): Selectors<Product[]> => s.products.getall
