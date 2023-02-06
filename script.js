var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
halfheight = c.height / 2;
halfwidth = c.width /2;
ctx.translate(halfwidth, halfheight)
function clearScreen() {
  ctx.translate(halfwidth* -1, halfheight * -1)
  c.height = window.innerHeight;
  c.width = window.innerWidth;
  ctx.clearRect(0, 0, c.width, c.height)
  ctx.translate(halfwidth, halfheight)
};
function drawLine(ctx, x1, y1, x2, y2, stroke = 'black', width = 3) {
  //very inefficient but I don't want to troubleshoot canvas funkyness
  //If past screen bounds then it sets it to max/min.
  if (x1 > halfwidth) {
    x1 = halfwidth;
  }
  if (x2 > halfwidth) {
    x2 = halfwidth;
  }
  if (x1 < halfwidth * -1) {
    x1 = halfwidth* -1;
  }
  if (x2 < halfwidth * -1) {
    x2 = halfwidth* -1;
  }
  if (y1 > halfheight) {
    y1 = halfheight;
  }
  if (y2 > halfheight) {
    y2 = halfheight;
  }
  if (y1 < halfheight * -1) {
    y1 = halfheight * -1;
  }
  if (y2 < halfheight * -1) {
    y2 = halfheight * -1;
  }
  if((x1>halfwidth&&x2>halfwidth)||(x1<halfwidth*-1&&x2<halfwidth*-1)||(y1>halfheight&&y2>halfheight)||(y1<halfheight*-1&&y1<halfheight*-1)) {

  }
  else {
    ctx.beginPath();
    ctx.moveTo(x1, -y1);
    ctx.lineTo(x2, -y2);
    ctx.strokeStyle = stroke;
    ctx.lineWidth = width;
    ctx.stroke();
    //draws line with Y-up vertices (thank god)
  }
};
//function rotation() {
//}
function inputhandler() {

}
function render() {

}
function drawTriangle() {

}
function drawSquare() {
  drawLine(ctx, -100,100,100,100, 'black', 6);
  drawLine(ctx,100,100,100,-100,  'black', 6);
  drawLine(ctx,100,-100,-100,-100 , 'black', 6);
  drawLine(ctx,-100,-100,-100,100, 'black', 6);
  //this isn't nesessary, testing coordinate system
}
function update() {

}
setInterval(update, 10);