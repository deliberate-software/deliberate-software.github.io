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

// Phone menu: the hamburger opens and closes the header links.
(function () {
  "use strict";
  var nav = document.querySelector(".nav");
  var toggle = document.querySelector(".nav__toggle");
  if (!nav || !toggle) return;

  function setOpen(open) {
    nav.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Menu");
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("is-open"));
  });
  nav.querySelectorAll(".nav__links a").forEach(function (link) {
    link.addEventListener("click", function () { setOpen(false); });
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
