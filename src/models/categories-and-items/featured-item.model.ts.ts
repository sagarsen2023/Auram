import BaseApiResponse from "../base-api-response.model";
import MediaResponse from "../media.model";
import { CategoryItem } from "./category.model";

interface StoneDetails {
  _id: string;
  type: string;
  weight: string;
  amount: number | null;
  description: string;
}

interface Collection {
  media: string[];
  textColor: string;
  status: boolean;
  _id: string;
  title: string;
  description: string;
  verticalImage: string;
  horizontalImage: string;
  slug: string;
  colorCode: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
  updatedBy: string;
}

interface MetalRateDetails {
  _id: string;
  metalDetails: string;
  rate: number;
}

export interface Product {
  _id: string;
  itemName: string;
  itemDescription: string;
  itemCategory: CategoryItem;
  itemMedia: MediaResponse[];
  thumbnail: MediaResponse;
  goldPurity: string;
  itemSpecification: string;
  height: string;
  width: string;
  makingCharge: number;
  itemSKU: string;
  slug: string;
  gender: string;
  stoneDetails: StoneDetails[];
  collections: Collection[];
  metalType: string;
  itemWeight: number;
  withGstPrice: number;
  withoutGstPrice: number;
  finalPrice: number;
  metalRateDetails: MetalRateDetails;
  hoverImage: MediaResponse;
  grossWeight: number;
  isFeatured: boolean;
}

export default interface FeaturedItemApiResponse extends BaseApiResponse {
  status: boolean;
  data: Product[];
}
