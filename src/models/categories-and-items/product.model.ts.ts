import BaseApiResponse from "../base-api-response.model";
import MediaResponse from "../media.model";
import { CategoryItem } from "./category.model";
import { CollectionItem } from "./collection.model";

export interface StoneDetails {
  _id: string;
  type: string;
  weight: string;
  amount: number | null;
  description: string;
}

export interface MetalRateDetails {
  _id: string;
  metalDetails: string;
  rate: number;
}

export interface Product {
  _id: string;
  itemName: string;
  itemDescription?: string;
  itemCategory?: CategoryItem;
  itemMedia?: MediaResponse[];
  thumbnail?: MediaResponse;
  goldPurity?: string;
  itemSpecification?: string;
  height?: string;
  width?: string;
  makingCharge?: number;
  itemSKU?: string;
  slug?: string;
  gender?: string;
  stoneDetails?: StoneDetails[];
  collections?: CollectionItem[];
  metalType?: string;
  itemWeight?: number;
  withGstPrice?: number;
  withoutGstPrice?: number;
  finalPrice?: number;
  metalRateDetails?: MetalRateDetails;
  hoverImage: MediaResponse;
  grossWeight?: number;
  isFeatured: boolean;
}

export interface ProductApiResponse extends BaseApiResponse {
  status: boolean;
  data: Product[];
}

export interface ItemDetailsResponse extends BaseApiResponse {
  status: boolean;
  data: Product;
}
