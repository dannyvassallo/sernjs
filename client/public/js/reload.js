// ASSESS WHETHER LIVERELOAD RUNS OR NOT
var head = document.getElementsByTagName('body')[0];
var js = document.createElement("script"),
hostname = window.location.hostname;

if (hostname == "localhost"){
 console.log("live reload is active.");
 js.src = "/reload/reload.js";
 js.type = "text/html";
} else {
 console.log("live reload disabled.");
}

head.appendChild(js);
