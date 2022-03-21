export default class ScrollSmooth {
  constructor(links, options) {
    this.links = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options;
    }

    this.scroll = this.scroll.bind(this);
  }
  scroll(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView(this.options);
  }
  addLInkEvent() {
    this.links.forEach((link) => {
      link.addEventListener("click", this.scroll);
    });
  }
  init() {
    if (this.links.length) {
      this.addLInkEvent();
      return this;
    }
  }
}
