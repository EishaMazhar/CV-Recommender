import axios from "axios";
import {
  API_URL,
  SIGNUP,
  LOGIN,
  POST_JOB,
  ALL_JOBS,
  DELETE_JOB,
  GET_RECOMMENDATION,
  POST_CV
} from "../Constants";

export default class api_services {
  LoginUser = values => {
    return axios.post(`${API_URL}${LOGIN}`, values);
  };

  signupUser = values => {
    return axios.post(`${API_URL}${SIGNUP}`, values);
  };

  postJob = (values, email) => {
    console.log("In post job function", values, email);
    return axios.post(`${API_URL}${POST_JOB}`, values, {
      headers: { Authorization: email }
    });
  };

  GetAllJobs = email => {
    console.log("In post job function", email);
    return axios.get(`${API_URL}${ALL_JOBS}`, {
      headers: { Authorization: email }
    });
  };

  deleteJob = (id, email) => {
    return axios.delete(`${API_URL}${DELETE_JOB}${id}`, {
      headers: {
        Authorization: email
      }
    });
  };
  postPDF = (email, myfile) => {
    return axios.post(`${API_URL}${POST_CV}`, myfile, {
      headers: {
        Authorization: email
      }
    });
  };

  getrecommendations = jobid => {
    return axios.get(`${API_URL}${GET_RECOMMENDATION}`, jobid);
  };
}
