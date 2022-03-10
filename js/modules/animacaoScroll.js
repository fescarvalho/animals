export default function scrollAnimation() {
  const sections = document.querySelectorAll("[data-anime='scroll']");

  if (sections.length) {
    function scrollAtivo() {
      const windowTop = window.innerHeight * 0.55;

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionActive = sectionTop - windowTop < 0;

        if (sectionActive) {
          section.classList.add("ativo");
        } else if (section.classList.contains("ativo")) {
          section.classList.remove("ativo");
        }
      });
    }
    scrollAtivo();
    window.addEventListener("scroll", scrollAtivo);
  }
}
