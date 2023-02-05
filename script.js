var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
ctx.translate(c.width / 2, c.height / 2)
function clearScreen() {
  ctx.translate(c.width / -2, c.height / -2)
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  ctx.clearRect(0, 0, c.width, c.height)
  ctx.translate(c.width / 2, c.height / 2)
};
function rotation() {

}
function inputhandler() {

}
function render() {

}
function update() {

}
setInterval(update, 10);