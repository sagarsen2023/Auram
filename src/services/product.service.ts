import CategoryResponse from "../models/categories-and-items/category.model";
import CollectionApiResponse from "../models/categories-and-items/collection.model";
import {
  ProductDetailsResponse,
  ProductApiResponse,
} from "../models/categories-and-items/product.model.ts";
import { fetchAPI } from "./config";
import {
  CATEGORY_URL,
  COLLECTION_URL,
  FEATURED_PRODUCTS_URL,
  LATEST_PRODUCTS_URL,
  PRODUCTS_URL,
} from "./queryUrls";

export const categoryAPI = {
  getAllCategories: async () => fetchAPI.get<CategoryResponse>(CATEGORY_URL),
};

export const collectionAPI = {
  getAllCollections: async () =>
    fetchAPI.get<CollectionApiResponse>(COLLECTION_URL),
};

export const productAPI = {
  getFeaturedProducts: async () =>
    fetchAPI.get<ProductApiResponse>(FEATURED_PRODUCTS_URL),
  getLatestProducts: async () =>
    fetchAPI.get<ProductApiResponse>(LATEST_PRODUCTS_URL),
  getProductDetails: async (id: string) =>
    fetchAPI.get<ProductDetailsResponse>(`${PRODUCTS_URL}/${id}`),
};
