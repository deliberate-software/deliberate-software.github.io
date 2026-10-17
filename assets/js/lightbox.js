// Opens a picture of the app larger, with its caption, in a photo box over the page.
// Clicking a picture, or pressing Return or Space on it, opens it; clicking anywhere, or Escape, closes it.
(function () {
  "use strict";

  function setUp() {
    var pictures = document.querySelectorAll(".shot img, .view img");
    if (!pictures.length || typeof HTMLDialogElement !== "function") return;

    var box = document.createElement("dialog");
    box.className = "lightbox";
    box.innerHTML = '<figure><img alt=""><figcaption></figcaption></figure>' +
      '<button class="lightbox__close" type="button" aria-label="Close">×</button>';
    document.body.appendChild(box);
    var image = box.querySelector("img");
    var caption = box.querySelector("figcaption");

    function open(picture) {
      var figure = picture.closest("figure");
      var text = figure && figure.querySelector("figcaption");
      // The picture as shown, in the appearance the page chose for it.
      image.src = picture.currentSrc || picture.src;
      image.alt = picture.alt;
      caption.innerHTML = text ? text.innerHTML : "";
      box.showModal();
    }

    pictures.forEach(function (picture) {
      picture.tabIndex = 0;
      picture.setAttribute("role", "button");
      picture.setAttribute("aria-label", "Enlarge: " + picture.alt);
      picture.addEventListener("click", function () { open(picture); });
      picture.addEventListener("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") { event.preventDefault(); open(picture); }
      });
    });

    box.addEventListener("click", function () { box.close(); });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setUp);
  else setUp();
})();
