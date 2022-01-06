function rotateString(id) {
  var text = document.getElementById(id).innerText;
  console.log(`text -> ${text}`)
  console.log(`text -> ${text[text.length - 1]}`)
  console.log(`text -> ${text.substring(0, text.length - 1)}`)

  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    document.getElementById(id).innerText = text;
  }, 500);
}
