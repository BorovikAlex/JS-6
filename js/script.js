let [
  display,
  cancel,
  equally,
  backspace,
  point,
  end,
  modal,
  modalContent,
  beforeNumber,
  other,
  faq,
  keyNode,
  extent,
  degree,
  rad,
  key,
] = [
  document.querySelector(".display"),
  document.querySelector(".cancel"),
  document.querySelector(".equally"),
  document.querySelector(".backspace"),
  document.querySelector(".point"),
  document.querySelector(".end"),
  document.querySelector(".modal-wrapper"),
  document.querySelector(".content"),
  ,
  ,
  ,
  ,
  0,
  0,
  0,
  sessionStorage.length - 1,
];

display.value = "0";

for (let number of document.querySelectorAll(".number")) {
  number.addEventListener("click", () => {
    if (other != "" || display.value === "0") {
      display.value = "";
      other = "";
    }
    display.value += number.innerHTML;
    faq = display.value;
  });
}

for (let operand of document.querySelectorAll(".operand")) {
  operand.addEventListener("click", () => {
    beforeNumber = display.value;
    beforeNumber += operand.innerHTML;
    other = beforeNumber;
    point.removeAttribute("disabled", "disabled");
  });
}

point.addEventListener("click", () => {
  if (display.value != "") {
    display.value += point.innerHTML;
    point.setAttribute("disabled", "disabled");
  }
});

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals);
}

equally.addEventListener("click", () => {
  if (key == key) {
    ++key;
  }
  if (extent == 0) {
    beforeNumber += display.value;
    display.value = round(eval(beforeNumber), 5);
    if (display.value == Infinity) {
      display.value = "Ошибка";
      other = display.value;
    }
    sessionStorage.setItem(key, beforeNumber + " = " + display.value);
    beforeNumber = "";
  } else {
    step = display.value;
    display.value = round(Math.pow(+extent, +step), 5);
    other = display.value;
    sessionStorage.setItem(
      key,
      extent + "<sup>" + step + "</sup>" + " = " + display.value
    );
  }
  point.removeAttribute("disabled", "disabled");
});

document.querySelector(".factorial").addEventListener("click", () => {
  if (key == key) {
    ++key;
  }
  function factorial(faq) {
    return faq != 1 ? faq * factorial(faq - 1) : 1;
  }
  f = display.value;
  if (f != 0) {
    display.value = round(factorial(faq), 5);
    sessionStorage.setItem(key, f + "!" + " = " + display.value);
    beforeNumber = factorial(faq);
    other = factorial(faq);
    point.removeAttribute("disabled", "disabled");
  } else {
    display.value = 1;
    sessionStorage.setItem(key, f + "!" + " = " + display.value);
    beforeNumber = factorial(faq);
    other = factorial(faq);
    point.removeAttribute("disabled", "disabled");
  }
});

document.querySelector(".extent").addEventListener("click", () => {
  extent = display.value;
  other = display.value;
  point.removeAttribute("disabled", "disabled");
});

document.querySelector(".degree").addEventListener("click", () => {
  if (degree !== 0) {
    display.value = degree;
    degree = 0;
  } else {
    if (display.value != "") {
      degree = display.value;
      display.value += document.querySelector(".degree").innerHTML;
      other = display.value;
    }
  }
  point.setAttribute("disabled", "disabled");
});

document.querySelector(".radian").addEventListener("click", () => {
  if (rad !== 0) {
    display.value = rad;
    rad = 0;
  } else {
    if (display.value != "") {
      rad = display.value;
      display.value += document.querySelector(".radian").innerHTML;
      other = display.value;
    }
  }
  point.setAttribute("disabled", "disabled");
});

document.querySelector(".sin").addEventListener("click", () => {
  if (key == key) {
    ++key;
  }
  i = (degree * Math.PI) / 180;
  display.value = round(Math.sin(i), 5);
  sessionStorage.setItem(
    key,
    "sin " + degree + "&#186;" + " = " + display.value
  );
  other = display.value;
  if (rad != 0) {
    display.value = round(Math.sin(rad), 5);
    sessionStorage.setItem(key, "sin " + rad + "rad" + " = " + display.value);
    other = display.value;
  }
  point.removeAttribute("disabled", "disabled");
});

document.querySelector(".cos").addEventListener("click", () => {
  if (key == key) {
    ++key;
  }
  i = (degree * Math.PI) / 180;
  display.value = round(Math.cos(i), 5);
  sessionStorage.setItem(
    key,
    "cos " + degree + "&#186;" + " = " + display.value
  );
  other = display.value;
  if (rad != 0) {
    display.value = round(Math.cos(rad), 5);
    sessionStorage.setItem(key, "cos " + rad + "rad" + " = " + display.value);
    other = display.value;
  }
  point.removeAttribute("disabled", "disabled");
});

document.querySelector(".tg").addEventListener("click", () => {
  if (key == key) {
    ++key;
  }
  i = (degree * Math.PI) / 180;
  display.value = round(Math.tan(i), 5);
  sessionStorage.setItem(
    key,
    "tg " + degree + "&#186;" + " = " + display.value
  );
  other = display.value;
  if (rad != 0) {
    display.value = round(Math.tan(rad), 5);
    sessionStorage.setItem(key, "tg " + rad + "rad" + " = " + display.value);
    other = display.value;
  }
  point.removeAttribute("disabled", "disabled");
});

document.querySelector(".ctg").addEventListener("click", () => {
  if (key == key) {
    ++key;
  }
  i = (degree * Math.PI) / 180;
  display.value = round(1 / Math.tan(i), 5);
  sessionStorage.setItem(
    key,
    "ctg " + degree + "&#186;" + " = " + display.value
  );
  other = display.value;
  if (rad != 0) {
    display.value = round(1 / Math.tan(rad), 5);
    sessionStorage.setItem(key, "ctg " + rad + "rad" + " = " + display.value);
    other = display.value;
  }
  point.removeAttribute("disabled", "disabled");
});

cancel.addEventListener("click", () => {
  other = "";
  display.value = 0;
  beforeNumber = "";
  faq = "";
  extent = 0;
  cel = 0;
  rad = 0;
  point.removeAttribute("disabled", "disabled");
});

document.querySelector(".history").addEventListener("click", () => {
  modal.classList.add("open");
  event.stopPropagation();
  document.querySelector(".history").classList.add("hide");
  let keyOne = key,
    keyTwo = key - 1,
    keyThree = key - 2;
  modal.innerHTML = "";
  modal.innerHTML =
    "<p> 1: " +
    sessionStorage.getItem(keyThree) +
    "</p>" +
    "<p> 2: " +
    sessionStorage.getItem(keyTwo) +
    "</p>" +
    "<p> 3: " +
    sessionStorage.getItem(keyOne) +
    "</p>";
  if (
    sessionStorage.getItem(keyThree) == null &&
    sessionStorage.getItem(keyTwo) != null
  ) {
    modal.innerHTML =
      "<p> 1: " +
      sessionStorage.getItem(keyTwo) +
      "</p>" +
      "<p> 2: " +
      sessionStorage.getItem(keyOne) +
      "</p>";
  } else if (
    sessionStorage.getItem(keyTwo) == null &&
    sessionStorage.getItem(keyOne) != null
  ) {
    modal.innerHTML = "<p> 1: " + sessionStorage.getItem(keyOne) + "</p>";
  } else if (sessionStorage.getItem(keyOne) == null) {
    modal.innerHTML = "<p>История операций отсутствует!</p>";
  }
});

document.querySelector(".wrapper").addEventListener("click", () => {
  modal.classList.remove("open");
  document.querySelector(".history").classList.remove("hide");
});
