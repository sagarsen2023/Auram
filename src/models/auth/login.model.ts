import BaseApiResponse from "../base-api-response.model";

export interface LogInApiResponse extends BaseApiResponse {
  status?: boolean;
  data?: {
    token?: string;
    user?: {
      _id: string;
      email: string;
      name: string;
    };
  };
  name?: string;
  message?: string;
  errors?: {
    email?: string;
  };
}

export interface LoginRequestParams {
  email: string;
  password: string;
}
