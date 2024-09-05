let i = 0;
const header = "Peter Gatsby";
let speed = 150;

const $headerElement = $("#header");
const $subheaderElement = $("#subheader");
const $headerBlinker = $("#header-blinker");

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
    $subheaderElement.fadeIn(3000);
  });
};
$(document).ready(function () {
  if (isMobile()) {
    $headerElement.html(header);
    $subheaderElement.show();
    $headerBlinker.remove();
  } else {
    type();
  }
});
