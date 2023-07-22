import axios from "axios";
import { product } from "../model/product";

const http = axios.create({
    baseURL: 'https://dummyjson.com/products'
})

export const paginatedProducts = async (limit:number,skip:number) : Promise<any>=> {
    const res = await http.get(`?limit=${limit}&skip=${skip}`);
    return res.data;
}

export const productsByCategory = async (category: string, limit: number, skip: number): Promise<any> => {
    const res = await http.get(`/category/${category}?limit=${limit}&skip=${skip}`)
    return res.data;
}

export const categories = async (): Promise<string[]> => {
    const res = await http.get(`/categories`);
    return res.data;
}

export const singleProduct = async (productId:number): Promise<product> => {
    const res = await http.get(`/${productId}`)
    return res.data;
}