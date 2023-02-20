function Character(imgs, x, y) {
  this.elem = $("<img/>");
  this.imgs = imgs;
  $("body").append(this.elem);
  this.x = x;
  this.y = y;
  this.ani = []
  this.isAni = false;
  this.shape = 0;
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
          this.elem.attr("src", this.imgs[this.imgNos[i]]);
        }, i * aniLen));
      }
      break;
    case "reset":
      imgNos.push(this.shape);
      this.animate(imgNos, aniTime, "linear", force);
      break;
    case "reverse":
      break;
  }
  this.shape = 
}
