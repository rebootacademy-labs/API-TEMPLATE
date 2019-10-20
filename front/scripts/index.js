const api = axios.create({
  baseURL: "http://localhost:5000/api/",
  timeout: 1000
});

// var globalProfile = localStorage.getItem("profile");
// var globalToken = localStorage.getItem("token");

// if (globalProfile && globalToken) {
//   login(globalProfile, globalToken);
// } else {
//   document.getElementById("login").style.display = "";
// }

// function login(profile, token) {
//   if (!token || !profile) { return; }

//   document.getElementById("login").style.display = "none";
//   document.getElementById("home").style.display = "";

//   document.getElementById("avatar").setAttribute("src", profile.picture);
//   document.getElementById("nick").innerText = profile.name;
// }


document.addEventListener("DOMContentLoaded", function() {

  // Example of signup
  document.getElementById("btn-signup").addEventListener("click", function(event) {
    event.preventDefault();
    api
      .post("auth/signup", {
        user_name: document.getElementById("user_name").value,
        user_email: document.getElementById("user_email").value,
        user_password: document.getElementById("user_password").value
      })
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
    api
      .get("/whoami", { headers: { token: localStorage.getItem("token") } })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error.response);
      });
  });
});