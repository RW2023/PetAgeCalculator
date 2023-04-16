function switchStylesheet() {
    const themeSelect = document.getElementById("theme-select");
    const selectedTheme = themeSelect.options[themeSelect.selectedIndex].value;
    const themeStylesheet = document.getElementById("theme-stylesheet");
    themeStylesheet.setAttribute("href", "./src/css/" + selectedTheme + ".css");
  }