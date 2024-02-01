const darkMode = () => {
  const themetoggleBtns = document.querySelectorAll("#theme-toggle");

  //on mount
  const theme = localStorage.getItem("theme");

  theme && document.body.classList.add(theme);

  //handlers

  const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("theme", "light-mode");
    } else {
      localStorage.removeItem("theme");
    }
  };

  //Events
  themetoggleBtns.forEach((btn) => {
    btn.addEventListener("click", () =>
      btn.addEventListener("click", handleThemeToggle)
    );
  });
};

export default darkMode;
