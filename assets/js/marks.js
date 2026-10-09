// Replays an app logo's animation when the pointer moves over it.
// Logos rest in their finished state, so nothing plays on load.
(function () {
  "use strict";

  var REPLAY_GUARD_MS = 4000;

  function play(mark) {
    var now = Date.now();
    if (mark._startedAt && now - mark._startedAt < REPLAY_GUARD_MS) return;
    mark._startedAt = now;
    mark.classList.remove("play");
    void mark.offsetWidth; // restart the CSS animations
    mark.classList.add("play");
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
