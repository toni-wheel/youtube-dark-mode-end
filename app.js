const body = document.querySelector("body");
const btn = document.querySelector("#btn");
const root = document.querySelector(":root");

const themes = {
  default: {
    "--bg-color": "#eae9ea",
    "--block-color": "#fff",
    "--text-color": "#0b1f3b",
    "--btn-color": "#263ce7",
    "--label-color": "#d1d7fa",
  },
  dark: {
    "--bg-color": "#282b3c",
    "--block-color": "#161e2b",
    "--text-color": "#fff",
    "--btn-color": "#263ce7",
    "--label-color": "#253044",
  },
};

// Проверяем наличие переменной в local storage
if (!localStorage.getItem("theme")) {
  localStorage.setItem("theme", false);
}

// Считываем данные с local storage
let isDarkTheme = JSON.parse(localStorage.getItem("theme"));

// Устанавливаем текущую тему
changeTheme(isDarkTheme);

btn.addEventListener("click", btnHandler);

// Функция для обработки нажатия кнопки
function btnHandler(e) {
  e.preventDefault;
  isDarkTheme = !isDarkTheme;
  localStorage.setItem("theme", isDarkTheme);
  changeTheme(isDarkTheme);
}

// Функция для смены темы
function changeTheme(isDarkTheme) {
  const theme = isDarkTheme ? "dark" : "default";
  Object.entries(themes[theme]).forEach(([key, value]) => {
    root.style.setProperty(key, value);
  });
}
