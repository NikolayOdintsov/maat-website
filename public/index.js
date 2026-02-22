document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".pedal-more");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const pedal = button.closest(".pedal");
      const isOpen = pedal.classList.contains("open");

      // закрываем все
      document.querySelectorAll(".pedal.open").forEach(openPedal => {
        openPedal.classList.remove("open");
        openPedal.querySelector(".pedal-more")
          .setAttribute("aria-expanded", "false");
      });

      // если была закрыта — открываем
      if (!isOpen) {
        pedal.classList.add("open");
        button.setAttribute("aria-expanded", "true");

        // Плавная прокрутка, чтобы легенда была видна
        setTimeout(() => {
          pedal.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 300); // небольшая задержка, чтобы анимация раскрытия началась
      }
    });
  });
});
