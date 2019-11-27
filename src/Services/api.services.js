import axios from "axios";
import { API_URL, SIGNUP, LOGIN } from "../Constants";

export default class api_services {
  LoginUser = values => {
    return axios.post(`${API_URL}${LOGIN}`, values);
  };

  signupUser = values => {
    return axios.post(`${API_URL}`, values);
  };

  postJob = (token, values) => {
    return (
      axios.post(`${API_URL}`, values),
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
  };

  postPDF = (token, formData) => {
    return axios.post(`${API_URL}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
}
