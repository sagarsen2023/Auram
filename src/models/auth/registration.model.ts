import BaseApiResponse from "../base-api-response.model";

export interface RegistrationApiResponse extends BaseApiResponse {
  status?: boolean;
  data?: {
    _id: string;
    email: string;
    name: string;
  };
  name?: string;
  message?: string;
  errors?: {
    email?: string;
  };
}

export interface RegistrationRequestParams {
  email: string;
  password: string;
  name: string;
}
