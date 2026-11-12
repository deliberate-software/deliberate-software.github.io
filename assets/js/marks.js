// Phone menu: the hamburger opens and closes the header links.
(function () {
  "use strict";
  // The header slims down and casts a shadow once the page scrolls under it.
  var header = document.querySelector(".site-header");
  if (header) {
    var stuck = function () { header.classList.toggle("is-stuck", window.scrollY > 8); };
    window.addEventListener("scroll", stuck, { passive: true });
    stuck();
  }
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

// Guide screenshots: clicking one shows it full size, letterboxed. Click again or press Escape to close.
// Without dialog support, the link just opens the image.
(function () {
  "use strict";
  var links = document.querySelectorAll(".shot a");
  if (!links.length || typeof HTMLDialogElement !== "function") return;

  var view = document.createElement("dialog");
  view.className = "shot-view";
  view.setAttribute("aria-label", "Screenshot");
  var big = document.createElement("img");
  view.appendChild(big);
  document.body.appendChild(view);
  view.addEventListener("click", function () { view.close(); });

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      var img = link.querySelector("img");
      event.preventDefault();
      big.src = img.currentSrc || img.src;   // the light or dark shot, whichever the page is showing
      big.alt = img.alt;
      // As big as the window really is (its width and height attributes), but never past the screen, less 24px a side.
      var w = +img.getAttribute("width") || 1200, h = +img.getAttribute("height") || 780;
      var scale = Math.min(1, (window.innerWidth - 48) / w, (window.innerHeight - 48) / h);
      big.style.width = Math.round(w * scale) + "px";
      big.style.height = Math.round(h * scale) + "px";
      big.style.borderRadius = getComputedStyle(img).borderRadius;   // percentages, so they fit any size
      view.showModal();
    });
  });
})();
