import axios from "axios";
import { product } from "../model/product";
import { ProductResponse } from "../model/ProductResponse";

const http = axios.create({
    baseURL: 'https://dummyjson.com/products'
})

export const paginatedProducts = async (limit:number,skip:number) : Promise<ProductResponse>=> {
    const res = await http.get(`?limit=${limit}&skip=${skip}`);
    return {"products":res.data.products,"total":res.data.total}
}

export const productsByCategory = async (category: string, limit: number, skip: number): Promise<ProductResponse> => {
    const res = await http.get(`/category/${category}?limit=${limit}&skip=${skip}`)
    return {"products":res.data.products,"total":res.data.total}
}

export const categories = async (): Promise<string[]> => {
    const res = await http.get(`/categories`);
    return res.data;
}

export const singleProduct = async (productId:number): Promise<product> => {
    const res = await http.get(`/${productId}`)
    return res.data;
}

export const searchProducts = async(query: string, limit: number, skip: number): Promise<ProductResponse>=> {
    const res = await http.get(`/search?q=${query}?limit=${limit}&skip=${skip}`)
    return {"products":res.data.products,"total":res.data.total}
}