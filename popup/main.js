var submitBlockage = function(url) {
  var request = new XMLHttpRequest();
  request.open("POST", "https://report.secondtrain.org/report/");
  request.overrideMimeType("text/plain");
  request.onload = function() {
    alert("Response received: " + request.responseText);
  };
  var data = new FormData();
  data.append('blocked_url', url);
  request.send(data);
};

document.getElementById("submit_button_id").onclick = function() {
  var urlInput = document.getElementById("blocked_url_id");
  submitBlockage(urlInput.value);
};
