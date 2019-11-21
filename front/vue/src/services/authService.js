import axios from "axios";

const ApiClient = axios.create({
  baseURL: "http://localhost:2222/api/",
  timeout: 1000
});

function isAuthenticated() {
  return localStorage.getItem("token") !== "";
}

async function signup(name, email, password) {
  const newUser = {
    user_name: name,
    user_email: email,
    user_password: password
  };
  try {
    const response = await ApiClient.post("auth/signup", newUser);
    // Success 🎉 Save Data
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.username);
    localStorage.setItem("email", response.data.email);
    return true;
  } catch (error) {
    // Error 😨
    if (error.response) {
      return error.response;
    } else if (error.request) {
      return error.request;
    } else {
      return error.message;
    }
  }
}

async function login(email, password) {
  const user = {
    user_email: email,
    user_password: password
  };
  const response = await ApiClient.post("auth/login", user);
  if (!response.data.error) {
    // Success 🎉 Save Data
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("name", response.data.username);
    localStorage.setItem("email", response.data.email);
  }
  return response.data;
}

async function whoami() {
  const response = await ApiClient.get("whoami", {
    headers: { token: localStorage.getItem("token") }
  }).catch(error => {
    console.error(error);
  });
  return response;
}

export default {
  login,
  signup,
  whoami,
  isAuthenticated
};
