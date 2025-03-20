const examples = [
  "Example1: This is the first example of NOOL code.",
  "Example2: Here's how you create a function in NOOL.",
  "Example3: NOOL makes loops fun and intuitive!",
  "Example4: Error handling in NOOL is straightforward.",
  "Example5: Advanced features of NOOL demonstrated here.",
];
let activeExample = examples[0];

document.addEventListener("DOMContentLoaded", () => {
  const description =
    "NOOL is a compiled language designed to make programming feel more like an adventure. Inspired by game mechanics, it blends familiar coding concepts with playful, themed syntax to create a more engaging experience.";

  const descriptionElement = document.querySelector(
    ".body-welcome-container p"
  );
  if (descriptionElement) {
    descriptionElement.textContent = description;
  }

  const exampleElement = document.querySelector(".body-editor-content p");
  if (exampleElement) {
    exampleElement.textContent = activeExample;
  }

  document
    .getElementById("ex1")
    .addEventListener("click", () => updateExample(0));
  document
    .getElementById("ex2")
    .addEventListener("click", () => updateExample(1));
  document
    .getElementById("ex3")
    .addEventListener("click", () => updateExample(2));
  document
    .getElementById("ex4")
    .addEventListener("click", () => updateExample(3));
  document
    .getElementById("ex5")
    .addEventListener("click", () => updateExample(4));

  updateActiveButton(0);

  const getStartedButton = document.querySelector(
    ".body-welcome-container button"
  );
  if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
      window.open("https://github.com/vahan-gev/nool", "_blank");
    });
  }

  document.getElementById("aboutus").addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  });
  document.getElementById("logo").addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  document.getElementById("docs").addEventListener("click", () => {
    window.open("https://github.com/vahan-gev/nool", "_blank");
  });
});

function updateExample(index) {
  activeExample = examples[index];
  const exampleElement = document.querySelector(".body-editor-content p");
  if (exampleElement) {
    exampleElement.textContent = activeExample;
  }

  updateActiveButton(index);
}

function updateActiveButton(activeIndex) {
  for (let i = 1; i <= 5; i++) {
    const button = document.getElementById(`ex${i}`);
    if (button) {
      button.classList.remove("active");
    }
  }

  const activeButton = document.getElementById(`ex${activeIndex + 1}`);
  if (activeButton) {
    activeButton.classList.add("active");
  }
}
