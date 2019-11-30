import axios from "axios";
import { API_URL, SIGNUP, LOGIN, POST_JOB } from "../Constants";

export default class api_services {
  LoginUser = values => {
    return axios.post(`${API_URL}${LOGIN}`, values);
  };

  signupUser = values => {
    return axios.post(`${API_URL}${SIGNUP}`, values);
  };

  postJob = values => {
    console.log("In post job function", values);
    return axios.post(`${API_URL}${POST_JOB}`, values);
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
  };
  deleteJob = (id, token) => {
    return axios.delete(`${API_URL}${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };
  postPDF = (token, formData) => {
    return axios.post(`${API_URL}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  };

  getrecommendations = (jobid, token) => {
    return axios.get(`${API_URL}`);
  };
}
