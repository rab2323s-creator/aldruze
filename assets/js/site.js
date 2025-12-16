(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if(saved) root.dataset.theme = saved;

  window.toggleTheme = function(){
    const now = root.dataset.theme === "dark" ? "" : "dark";
    if(now) root.dataset.theme = now; else delete root.dataset.theme;
    localStorage.setItem("theme", now);
  };
})();
