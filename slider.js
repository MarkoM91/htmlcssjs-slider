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
  updateDots();
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
  updateDots();
}

function updateDots() {

  var images = $('.picture-container > img');
  var activeInd;
  for (var i = 0; i < images.length; i++) {
      if (images.eq(i).hasClass("active")) {

        activeInd = i;
      }
    }

    console.log(activeInd);

    var oldBot = $('.direct-link-wrapper > i.fas');
    oldBot.removeClass("fas").addClass("far");

    var dots = $('.direct-link-wrapper > i');
    var nextDot = dots.eq(activeInd);
        nextDot.addClass("fas").removeClass("far");
}



function init() {
  var leftPart = $('.left-part');
  var rightPart = $('.right-part');

  leftPart.click(leftClick);
  rightPart.click(rightClick);
}
init();

$(document).ready(init);
