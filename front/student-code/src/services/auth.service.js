import axios from "axios";

const apiService = axios.create({
  baseURL: "http://localhost:2222/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  login(user) {
    return apiService
      .post("auth/login", {
        user_email: user.email,
        user_password: user.password
      })
      .then(res => res.data)
      .then(data => {
        const user = {
          token: data.token,
          email: data.email,
          name: data.username
        };
        localStorage.setItem("reboot-user", JSON.stringify(user));
      });
  },
  signup(user) {
    return apiService
      .post("auth/signup", {
        user_email: user.email,
        user_password: user.password,
        user_name: user.username
      })
      .then(res => res.data)
      .then(data => {
        const user = {
          token: data.token,
          email: data.email,
          username: data.username
        };
        localStorage.setItem("reboot-user", JSON.stringify(user));
      });
  }
};
