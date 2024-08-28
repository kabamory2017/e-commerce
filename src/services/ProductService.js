import axios from "axios";

export const GetProducts = async () => {
    return await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products`);
}

export const GetProductById = async (productId) => {
    return await axios.get(`${process.env.REACT_APP_API_BASE_URL}/products/${productId}`);
}