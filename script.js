const examples = [
  `class Person {\n  name: string;\n  age: int;\n\n  skill sayHello(): string {\n    reward "Hello, my name is " + this.name + " and I am " + this.age + " years old.";\n  }\n}\n\nstat human = Person("Felix", 20);\n\necho(human.sayHello()); // Output: Hello, my name is Felix and I am 20 years old.`,
  `for(i in 1...20) {\n  echo(i);\n  i++;\n}`,
  `skill checkIfEven(number: int): boolean {\n  encounter(number % 2 == 0) {\n    reward true;\n  } fallback {\n    reward false;\n  }\n}\n\necho(checkIfEven(4)); // Output: true\necho(checkIfEven(5)); // Output: false`,
  `skill fibonacci(n: int): int {\n  stat fib = [0, 1];\n  stat i = 2;\n  stat newValue = 0;\n  quest (i <= n) {\n    newValue = fib[i - 1] + fib[i - 2];\n    push(fib, newValue);\n    i = i + 1;\n  }\n  reward fib[length(fib) - 1];\n}\n\necho(fibonacci(n)); // Output: 55`,
  `stat number = 1;\nquest(number < 20) {\n  echo(number);\n  number = number + 2;\n}`,
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

  // Update this to use the code element with ID "example-display"
  const codeElement = document.getElementById("example-display");
  if (codeElement) {
    codeElement.textContent = activeExample;
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
  // Update this to use the code element with ID "example-display"
  const codeElement = document.getElementById("example-display");
  if (codeElement) {
    codeElement.textContent = activeExample;
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
