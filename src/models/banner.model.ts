import BaseApiResponse from "./base-api-response.model";

// TODO: If image comes in this way then we need to create a separate model for image
interface Image {
  _id: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  path: string;
  createdAt: string;
  updatedAt: string;
}

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
  image: Image;
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
