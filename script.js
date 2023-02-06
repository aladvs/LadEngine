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
function drawLine(ctx, x1, y1, x2, y2, stroke = 'black', width = 3) {
  ctx.beginPath();
  ctx.moveTo(x1, -y1);
  ctx.lineTo(x2, -y2);
  ctx.strokeStyle = stroke;
  ctx.lineWidth = width;
  ctx.stroke();
};
//function rotation() {
//}
function inputhandler() {

}
function render() {

}
function update() {
  drawLine(ctx, 0, 0, 120, 0, 'black', 6);
}
setInterval(update, 10);