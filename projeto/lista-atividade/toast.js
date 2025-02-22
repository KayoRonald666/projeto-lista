export function toast(message, colorClass) {
  const toast = document.createElement("div");
  toast.classList.add(
    "text-white",
    "p-2",
    "rounded-md",
    "fixed",
    "bottom-5",
    "left-1/2",
    "transform",
    "-translate-x-1/2",
    colorClass
  );
  toast.innerText = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
