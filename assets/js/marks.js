// Plays each app logo's animation once it is mostly on screen,
// and replays it when the pointer moves over it.
(function () {
  "use strict";

  var REPLAY_GUARD_MS = 4000;
  var marks = document.querySelectorAll(".js-mark");
  if (!marks.length) return;

  function play(mark) {
    var now = Date.now();
    if (mark._startedAt && now - mark._startedAt < REPLAY_GUARD_MS) return;
    mark._startedAt = now;
    mark.classList.remove("play");
    void mark.offsetWidth; // restart the CSS animations
    mark.classList.add("play");
  }

  marks.forEach(function (mark) {
    mark.addEventListener("mouseenter", function () { play(mark); });
  });

  if (!("IntersectionObserver" in window)) {
    marks.forEach(play);
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        play(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: [0, 0.6, 1] });

  marks.forEach(function (mark) { observer.observe(mark); });
})();

// "Join the … waitlist" buttons pre-select just that app in the form.
(function () {
  "use strict";
  document.querySelectorAll("[data-interest]").forEach(function (link) {
    link.addEventListener("click", function () {
      var chosen = link.getAttribute("data-interest");
      document.querySelectorAll(".interest input").forEach(function (box) {
        box.checked = box.id === "interest-" + chosen;
      });
    });
  });
})();
