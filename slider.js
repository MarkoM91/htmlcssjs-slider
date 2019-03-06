function leftClick() {
  console.log("left-click")
}

function rightClick() {

  var activeImg = $('img.active');
  activeImg.removeClass("active");

  var nextImg = activeImg.next("img");
  if (activeImg.hasClass("last")) {

    nextImg = $('.picture-container > img.first');
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
