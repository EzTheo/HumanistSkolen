const stylesheet = new CSSStyleSheet();
document.adoptedStyleSheets.push(stylesheet);
//Object Classes
class Box {
    constructor({ type, className, parent } = {}) {
        this.box = createHTMLElement({
            type: type ?? "div",
            className: className ?? "box",
            parent: parent,
        });
        this.box.addEventListener("click", this.clicked.bind(this));
        return this;
    }
    clicked() {
        const popUp = createHTMLElement({
            type: "div",
            id: "popup",
            parent: "body",
        });
        const newContainer = createHTMLElement({
            type: "div",
            id: "popup-container",
            parent: "#popup",
        });
        newContainer.innerHTML = this.box.innerHTML;
        const popUpCross = createHTMLElement({
            type: "div",
            id: "popup-cross",
            parent: "#popup-container",
        });
        popUp.setAttribute("tabindex", 0);
        popUp.addEventListener("focusout", () => popUp.remove());
        popUpCross.addEventListener("click", () =>
            document.querySelector("#popup").remove()
        );
        popUp.focus();
        return this;
    }
    addTitle(title) {
        this.box.innerHTML = title;
        return this;
    }
    addTag(name, value) {
        this.box.setAttribute(name, value);
        return this;
    }
    removeTag(name) {
        this.box.removeAttribute(name);
        return this;
    }
}
class Observation extends Box {
    constructor() {
        super({ parent: "#observations" });
    }
}
class Event extends Box {
    constructor() {
        super({ parent: "#events" });
    }
}

//Objects
const Event1 = new Event().addTitle("Event 1");
const Event2 = new Event().addTitle("Event 2");
const Event4 = new Event().addTitle("Event 3");

const Ob1 = new Observation().addTitle("Observasjon 1");
const Ob2 = new Observation().addTitle("Observasjon 2");

/* const observationsHeight = document
    .querySelector("#observations")
    .getBoundingClientRect().height;
const eventsHeight = document
    .querySelector("#events")
    .getBoundingClientRect().height;
console.log(observationsHeight);
stylesheet.addRule(
    "#observations",
    `transform: translateY(calc(calc(50vh - 5em) - 100%));`
);
stylesheet.addRule(
    "#events",
    `transform: translateY(calc(calc(50vh - 5em) - calc(${observationsHeight}px + 10em)));`
); */

//Functions
function createHTMLElement({ type, id, className, parent }) {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
}
