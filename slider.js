function leftClick() {

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



    var oldBot = $('.direct-link-wrapper > i.fas');
    oldBot.removeClass("fas").addClass("far");

    var dots = $('.direct-link-wrapper > i');
    var nextDot = dots.eq(activeInd);
        nextDot.addClass("fas").removeClass("far");
}

function dotClick() {
  var me = $(this);
  var meIndex = me.index();

  var activeImg = $('img.active');
  activeImg.removeClass("active");

  var images = $('.picture-container > img');
  var next = images.eq(meIndex);
  next.addClass("active");
  updateDots();
}

function init() {
  var leftPart = $('.left-part');
  var rightPart = $('.right-part');
  var dots = $('.direct-link-wrapper > i');

  leftPart.click(leftClick);
  rightPart.click(rightClick);

   dots.click(dotClick);

}
init();

$(document).ready(init);
