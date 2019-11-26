import axios from "axios";
import { API_URL, SIGNUP, LOGIN } from "../Constants";

export default class api_services {
  LoginUser = values => {
    return axios.post(`${API_URL}${LOGIN}`, values);
  };

  signupUser = values => {};
  postPDF = (token, formData) => {
    return axios.post(`${API_URL}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
}
