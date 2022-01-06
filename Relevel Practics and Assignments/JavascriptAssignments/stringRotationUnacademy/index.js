function rotateString(id) {
  var text = document.getElementById(id).innerText;

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    document.getElementById(id).innerText = text;
  }, 500);
}
