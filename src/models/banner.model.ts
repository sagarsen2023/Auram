import BaseApiResponse from "./base-api-response.model";
import MediaResponse from "./media.model";

interface User {
  status: boolean;
  _id: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface BannerData {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  image: MediaResponse;
  link: string;
  buttonText: string;
  createdBy: User;
  updatedBy?: User;
  createdAt: string;
  updatedAt: string;
}

export default interface BannerApiResponse extends BaseApiResponse {
  status: boolean;
  totalCount: number;
  data: BannerData[];
}
