import {
  LoginRequestParams,
  LogInApiResponse,
} from "../models/auth/login.model";
import {
  RegistrationRequestParams,
  RegistrationApiResponse,
} from "../models/auth/registration.model";
import { fetchAPI } from "./config";
import { LOGIN_URL, REGISTRATION_URL } from "./queryUrls";

const authAPI = {
  login: (loginData: LoginRequestParams) =>
    fetchAPI.post<LogInApiResponse>(LOGIN_URL, loginData),
  register: (registerData: RegistrationRequestParams) =>
    fetchAPI.post<RegistrationApiResponse>(REGISTRATION_URL, registerData),
};

export default authAPI;
