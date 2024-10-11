import {
  LoginRequestParams,
  LogInApiResponse,
} from "../models/auth/login.model";
import { fetchAPI } from "./config";
import { LOGIN_URL } from "./queryUrls";

const authAPI = {
  login: (loginData: LoginRequestParams) =>
    fetchAPI.post<LogInApiResponse>(LOGIN_URL, loginData),
};

export default authAPI;
