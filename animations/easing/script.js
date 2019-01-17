function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}

function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function animate(startValue, endValue, durationMs) {
  var startTime = new Date();
  var ammountToChange = endValue - startValue;

  var animation = setInterval(function() {
    var time = new Date() - startTime;
    if (time < durationMs) {
      window.scrollTo(
        0,
        easeOutQuint(time, startValue, ammountToChange, durationMs)
      );
    } else {
      window.scrollTo(0, endValue);
      myStopFunction(animation);
    }
  }, 13);
}

function myStopFunction(f) {
  clearInterval(f);
}

function scrollDown() {
  var element = document.querySelector(".outer2");
  var bodyRect = document.body.getBoundingClientRect(),
    elemRect = element.getBoundingClientRect(),
    offset = elemRect.top - bodyRect.top;
  var scrollY = window.pageYOffset;

  animate(scrollY, offset - 200, 2000);
}
