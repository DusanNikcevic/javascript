var inner = document.querySelector(".inner");
var innerText = document.querySelector(".innerText");

var seconds = 0;

function incrementSeconds() {
  seconds += 0.01;
}

function realAdd(add) {
  return add * (2 - add);
}

function easeOutQuad(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
}

function easeOutQuint(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
}

function animate(startValue, endValue, durationMs) {
  var stepCount = durationMs / 13;
  var currentValue = startValue;
  var valueIncrement = (endValue - startValue) / stepCount;

  // console.log(endValue);
  var startTime = new Date();
  var increment = endValue - currentValue;
  // console.log(window.innerWidth);

  var animation = setInterval(function() {
    var time = new Date() - startTime;
    if (time < durationMs) {
      window.scrollTo(
        0,
        easeOutQuint(time, currentValue, increment, durationMs)
      );
      // console.log(window.pageYOffset);
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
  //   alert("Element is " + offset + " vertical pixels from <body>");
  var scrollY = window.pageYOffset;

  animate(scrollY, offset - 200, 2000);
}
