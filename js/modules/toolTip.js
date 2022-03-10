export default function initToolTip() {
  const tooltips = document.querySelectorAll("[data-tooltip]");

  function onMouseOver(event) {
    const toolTipBox = criarTollTip(this);

    onMouseMove.toolTipBox = toolTipBox;
    this.addEventListener("mousemove", onMouseMove);

    onMouseLeave.toolTipBox = toolTipBox;
    onMouseLeave.element = this;
    this.addEventListener("mouseleave", onMouseLeave);
  }

  const onMouseLeave = {
    handleEvent() {
      this.toolTipBox.remove();
      this.element.removeEventListener("mouseleave", onMouseLeave);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  const onMouseMove = {
    handleEvent(event) {
      this.toolTipBox.style.top = event.pageY + 20 + "px";
      this.toolTipBox.style.left = event.pageX + 20 + "px";
    },
  };

  tooltips.forEach((tooltip) => {
    tooltip.addEventListener("mouseover", onMouseOver);
  });

  function criarTollTip(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("area-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    return toolTipBox;
  }
}
