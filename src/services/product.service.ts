import CategoryResponse from "../models/categories-and-items/category.model";
import { fetchAPI } from "./config";
import { CATEGORY_URL } from "./queryUrls";

const categoryAPI = {
  getAllCategories: async () => fetchAPI.get<CategoryResponse>(CATEGORY_URL),
};

export default categoryAPI;
