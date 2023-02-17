function Character(imgs, x, y) {
  this.elem = $("<img/>");
  this.imgs = imgs;
  $("body").append(this.elem);
  this.x = x;
  this.y = y;
}

Character.prototype.animate = function (imgNos, aniTime, aniMode = "reset") {
  switch (aniMode) {
    case "linear":
      break;
    case "reset":
      break;
    case "reverse":
      break;
  }
}
