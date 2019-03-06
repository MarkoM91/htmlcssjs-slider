function leftClick() {
  console.log("left-click")
  var activeImg = $('img.active');
  activeImg.removeClass("active");

  var prevImg;
  var prevImg = activeImg.prev("img");
  if (activeImg.hasClass("first")) {

   prevImg = $("img.last");
 }



  prevImg.addClass("active");
}


function rightClick() {

  var activeImg = $('img.active');
  activeImg.removeClass("active");

  var nextImg;
  if (activeImg.hasClass("last")) {

    nextImg = $('.picture-container > img.first');
  } else {

    nextImg = activeImg.next("img");
  }
  nextImg.addClass("active");
}




function init() {
var leftPart = $('.left-part');
var rightPart = $('.right-part');

leftPart.click(leftClick);
rightPart.click(rightClick);
}
init();

$(document).ready(init);
