import axios from "axios";
import { product } from "../types/product";
import { ProductResponse } from "../types/ProductResponse";
import { cartProduct } from "../types/cartProduct";
import { cartDetails } from "../types/cartDetails";

const http = axios.create({
    baseURL: 'https://dummyjson.com'
})

export const paginatedProducts = async (limit:number,skip:number) : Promise<ProductResponse>=> {
    const res = await http.get(`/products?limit=${limit}&skip=${skip}`);
    return {"products":res.data.products,"total":res.data.total}
}

export const productsByCategory = async (category: string, limit: number, skip: number): Promise<ProductResponse> => {
    const res = await http.get(`/products/category/${category}?limit=${limit}&skip=${skip}`)
    return {"products":res.data.products,"total":res.data.total}
}

export const categories = async (): Promise<string[]> => {
    const res = await http.get(`/products/categories`);
    return res.data;
}

export const singleProduct = async (productId:number): Promise<product> => {
    const res = await http.get(`/products/${productId}`)
    return res.data;
}

export const searchProducts = async(query: string, limit: number, skip: number): Promise<ProductResponse>=> {
    const res = await http.get(`/products/search?q=${query}&limit=${limit}&skip=${skip}`)
    return {"products":res.data.products,"total":res.data.total}
}

export const login = async (username: string, password: string): Promise<any> => {
    const res=await http.post(`/auth/login`,{
        username: username,
        password: password
    })
    return res.data;
}

export const getUser = async(userId:string): Promise<product>=> {
    const res = await http.get(`/users/${userId}`)
    return res.data;
}
export const UsersCart = async (userId: number): Promise<cartDetails> => {
    const res = await http.get(`/users/${userId}/carts`);
    return res.data.carts[0];
}