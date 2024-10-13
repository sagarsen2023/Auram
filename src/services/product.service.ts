import CategoryResponse from "../models/categories-and-items/category.model";
import FeaturedItemApiResponse from "../models/categories-and-items/featured-item.model.ts";
import { fetchAPI } from "./config";
import { CATEGORY_URL, FEATURED_PRODUCTS_URL } from "./queryUrls";

export const categoryAPI = {
  getAllCategories: async () => fetchAPI.get<CategoryResponse>(CATEGORY_URL),
};

export const productAPI = {
  getFeaturedCollection: async () =>
    fetchAPI.get<FeaturedItemApiResponse>(FEATURED_PRODUCTS_URL),
};

