var head = document.getElementsByTagName('head')[0],
js = document.createElement("script"),
hostname = window.location.hostname;

js.type = "text/javascript";

if (hostname == "localhost"){
  console.log("live reload is active.");
  js.src = "/reload/reload.js";
} else {
  console.log("live reload disabled.");
}

head.appendChild(js);
