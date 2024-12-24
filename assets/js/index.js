$(document).ready(function () {
  const titles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Machine Learning Researcher",
    "Cybersecurity Specialist",
    "Adjunct Instructor",
    "Open Source Contributor",
  ];

  let index = 0;

  function typeEffect(text, element, callback) {
    let charIndex = 0;
    const typingSpeed = 100;

    function typeChar() {
      if (charIndex < text.length) {
        element.text(element.text() + text[charIndex]);
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else if (callback) {
        setTimeout(callback, 800);
      }
    }

    typeChar();
  }

  function deleteEffect(element, callback) {
    const deletingSpeed = 50;

    function deleteChar() {
      const currentText = element.text();
      if (currentText.length > 0) {
        element.text(currentText.substring(0, currentText.length - 1));
        setTimeout(deleteChar, deletingSpeed);
      } else if (callback) {
        callback();
      }
    }

    deleteChar();
  }

  function updateTitle() {
    const element = $(".title");
    typeEffect(titles[index], element, function () {
      deleteEffect(element, function () {
        index = (index + 1) % titles.length;
        updateTitle();
      });
    });
  }

  updateTitle();
});
