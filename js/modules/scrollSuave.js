export default function scrollSmooth() {
  const links = document.querySelectorAll('[data-menu="suave"] a[href^="#"]');

  if (links.length) {
    function scroll(e) {
      e.preventDefault();
      const href = e.currentTarget.getAttribute("href");
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    links.forEach((link) => {
      link.addEventListener("click", scroll);
    });
  }
}
