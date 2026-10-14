// Replays an app logo's animation when the pointer moves over it.
// Logos rest in their finished state, so nothing plays on load.
// CSS-animated logos restart by toggling the "play" class. SVG-animated
// logos (data-smil, like Radar) start their own .smil-replay animation,
// which for Radar sweeps two full turns from 2 o'clock back to 2 o'clock.
(function () {
  "use strict";

  var reduceMotion = false;
  try { reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}

  function playSmil(mark) {
    if (reduceMotion) return;
    // Radar's sweep, arm and shadow are separate animations; start them together.
    mark.querySelectorAll(".smil-replay").forEach(function (anim) {
      if (typeof anim.beginElement === "function") anim.beginElement();
    });
  }

  function playCss(mark) {
    mark.classList.remove("play");
    void mark.offsetWidth; // restart the CSS animations
    mark.classList.add("play");
  }

  function play(mark) {
    var guard = parseInt(mark.getAttribute("data-duration"), 10) || 4000;
    var now = Date.now();
    if (mark._startedAt && now - mark._startedAt < guard) return;
    mark._startedAt = now;
    if (mark.hasAttribute("data-smil")) playSmil(mark); else playCss(mark);
  }

  document.querySelectorAll(".js-mark").forEach(function (mark) {
    mark.addEventListener("mouseenter", function () { play(mark); });
  });
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
