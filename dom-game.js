function Character(imgs, x, y) {
  this.elem = $("<img/>");
  this.imgs = imgs;
  $("body").append(this.elem);
  this.x = x;
  this.y = y;
  this.ani = []
  this.isAni = false;
}

Character.prototype.animate = function (imgNos, aniTime, aniMode = "reset", force = false) {
  var aniLen = aniTime / imgNos.length;
  
  //do not break a running animation
  if (!force && this.isAni) return false;
  
  this.isAni = true;
  setTimeout(() => {
    this.isAni = false
  }, aniTime);
  
  switch (aniMode) {
    case "linear":
      for (i in imgNos) {
        this.ani.push(setTimeout(() => {
          this.elem.attr();
        }, i * aniLen));
      }
      break;
    case "reset":
      imgNos
      break;
    case "reverse":
      break;
  }
}
