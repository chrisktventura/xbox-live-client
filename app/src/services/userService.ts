import axios from "axios";
import { User } from "../types/usertypes";
import api from "./Api";
import swal from 'sweetalert'
axios.defaults.baseURL = "https://xbox-live-server-blue.onrender.com/api";
axios.defaults.headers.post["Content-Type"] = "application/json";
export const userService = {
  postUser: async (newUser: User) => {
    try {
      const req = await axios.post("/user", newUser);
      return req;
    } catch (error: any) {
      swal({  
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },

  findUserById: async (id: string) => {
    try {
      api
        .get(`/user/${id}`)
        .then((response: any) => response)
        .then((response: any) => response);
    } catch (error: any) {
      swal({
        title: 'Erro',
        text: `${error.message}`,
        icon: 'error',
        timer: 7000
      })
    }
  },

  updateUser: async (user: User) => {
    try {
      const req = await axios.patch("/user", user);
      return req;
    } catch (err) {
      alert(err);
    }
  },

  deleteUser: async (id: string) => {
    try {
      const req = await axios.delete(`/user/${id}`);
      return req;
    } catch (err) {
      alert(err);
    }
  }
};