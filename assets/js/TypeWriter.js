let i = 0;
const header = "Peter Gatsby";
const subheader =
  "Computer Science Master's Graduate - Actively Seeking Opportunities";
let speed = 150;

const $headerElement = $("#header");
const $subheaderElement = $("#subheader");
const $headerBlinker = $("#header-blinker");
const $subheaderBlinker = $("#subheader-blinker");

const isMobile = () => {
  return window.matchMedia("(max-width: 992px)").matches;
};

const typeText = ($element, text, callback) => {
  if (i < text.length) {
    $element.html($element.html() + text.charAt(i));
    i++;
    setTimeout(() => typeText($element, text, callback), speed);
  } else {
    if (callback) callback();
  }
};

const type = () => {
  $headerBlinker.show();
  typeText($headerElement, header, () => {
    i = 0;
    speed = 100;
    $headerBlinker.remove();
    $subheaderBlinker.show();
    typeText($subheaderElement, subheader);
  });
};

$(document).ready(function () {
  if (isMobile()) {
    $headerElement.html(header);
    $subheaderElement.html(subheader);
    $headerBlinker.remove();
    $subheaderBlinker.remove();
  } else {
    type();
  }
});
