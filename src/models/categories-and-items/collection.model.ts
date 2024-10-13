import BaseApiResponse from "../base-api-response.model";
import MediaResponse from "../media.model";
import UserResponse from "../user.model";

interface CollectionItem {
  _id: string;
  title: string;
  description: string;
  media: MediaResponse[];
  status: boolean;
  verticalImage: MediaResponse;
  horizontalImage: MediaResponse;
  slug: string;
  colorCode: string;
  textColor: string;
  createdBy: UserResponse;
  updatedBy: UserResponse;
  createdAt: string;
  updatedAt: string;
}

export default interface CollectionApiResponse extends BaseApiResponse {
  status: boolean;
  totalCount: number;
  data: CollectionItem[];
}
