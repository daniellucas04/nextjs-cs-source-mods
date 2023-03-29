export function changeTheme() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

export function themeCheck() {
  const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  const userTheme = localStorage.getItem("theme");

  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    return;
  }
}