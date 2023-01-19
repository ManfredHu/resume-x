export const pageTitle = "Tony Stark's Resume";
try {
  window.parent.document.title = pageTitle;
} catch {
  console.error("set window.parent.document.title error");
}
