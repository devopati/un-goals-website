import axios from "axios";

import { toast } from "react-toastify";

// const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
// const BACKEND_URL = "https://capitalinvestments.onrender.com";
const BACKEND_URL = "https://capitalinvestments.onrender.com";

export const validateEmail = (email) => {
  return email
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
};

// REGISTER USER

export const registerUser = async (userData) => {
  console.log(BACKEND_URL);
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/auth/register`,

      userData
    );
    if (response.statusText === 200) {
      toast.success("Registered Successfully ");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    return;
  }
};

// LOGIN USER
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/auth/login`,
      userData
    );
    if (response.status === 200) {
      toast.success("Login Successfully ");
    }
    return response.data;
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
// LOGOUT USER
export const logoutUser = async () => {
  try {
    await axios.get(`${BACKEND_URL}/api/v1/auth/logout`);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
