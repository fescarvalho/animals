export default class ToolTip {
  constructor(tooltips) {
    this.toolTips = document.querySelectorAll(tooltips);
    //BInd do objeto da classe aos callbakcs
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  //MUDAR ESTILO DA TOOLTIP AO MOVER O MOUSE
  onMouseMove(event) {
    this.toolTipBox.style.top = `${event.pageY + 20}px`;

    if (event.pageX + 240 > window.innerWidth) {
      this.toolTipBox.style.left = `${event.pageX - 180}px`;
    } else {
      this.toolTipBox.style.left = `${event.pageX + 20}px`;
    }
  }

  //REMOVE A TOOLTIP E OS EVENTOS QUANDO TIRO O MOUSE
  onMouseLeave({ currentTarget }) {
    this.toolTipBox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  //CRIA A TOOLTIP BOX E COLOCA NO BODY
  criarTollTip(element) {
    const toolTipBox = document.createElement("div");
    const text = element.getAttribute("area-label");
    toolTipBox.classList.add("tooltip");
    toolTipBox.innerText = text;
    document.body.appendChild(toolTipBox);
    this.toolTipBox = toolTipBox;
  }

  //criar a tooltip e os eventos de
  //mousemove e mouseleave ao target
  onMouseOver({ currentTarget }) {
    //criar a tolltipbox e coloca em uma propriedade
    this.criarTollTip(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  //adciona os evetos de mouseOver a cada tooltip
  addTollTipEvent() {
    this.toolTips.forEach((tooltip) => {
      tooltip.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.toolTips.length) {
      this.addTollTipEvent();
    }
    return this;
  }
}
