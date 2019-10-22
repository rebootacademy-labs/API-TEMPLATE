const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 1000
});

document.addEventListener("DOMContentLoaded", function() {

  // Example of signup
  document.getElementById("btn-signup").addEventListener("click", function(event) {
    const newUser = {
      user_name:     document.getElementById("user_name").value,
      user_email:    document.getElementById("user_email").value,
      user_password: document.getElementById("user_password").value
    };

    api
      .post("auth/signup", newUser)
      .then(function(response) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name",  response.data.name);
        localStorage.setItem("email", response.data.email);

        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response);
      });
  });

  // Example of calling API
  document.getElementById("btn-api").addEventListener("click", function() {
    event.preventDefault();
    const axiosOptions = {
      headers: {
        token: localStorage.getItem("token")
      }
    };

    api
      .get("/whoami", axiosOptions)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response);
      });
  });
});