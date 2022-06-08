//Object Classes
class Box {
    constructor({ type, className, parent } = {}) {
        this.box = createHTMLElement({
            type: type ?? "div",
            className: className ?? "box",
            parent: parent ?? undefined,
        });
        this.box.addEventListener("click", this.clicked.bind(this));
        return this;
    }
    clicked() {
        const popUp = createHTMLElement({
            type: "div",
            id: "popup",
            parent: "#timeline",
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
        popUpCross.addEventListener("click", () => document.querySelector("#popup").remove());
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
        super({ parent: "#observations-container" });
    }
}
class Event extends Box {
    constructor() {
        super({ parent: "#events-container" });
    }
}

//Objects
const Event1 = new Event().addTitle("Event 1");
const Event2 = new Event().addTitle("Event 2");
const Event4 = new Event().addTitle("Event 3");
const Event3 = new Event().addTitle("Event 4");
const Event5 = new Event().addTitle("Event 5");
const Event6 = new Event().addTitle("Event 6");
const Event7 = new Event().addTitle("Event 7");
const Event8 = new Event().addTitle("Event 8");
const Event9 = new Event().addTitle("Event 9");
const Event10 = new Event().addTitle("Event 10");
const Event11 = new Event().addTitle("Event 11");
const Event12 = new Event().addTitle("Event 12");

const Ob1 = new Observation().addTitle("Observasjon 1");
const Ob2 = new Observation().addTitle("Observasjon 2");
const Ob4 = new Observation().addTitle("Observasjon 3");
const Ob3 = new Observation().addTitle("Observasjon 4");
const Ob5 = new Observation().addTitle("Observasjon 5");
const Ob6 = new Observation().addTitle("Observasjon 6");
const Ob7 = new Observation().addTitle("Observasjon 7");
const Ob8 = new Observation().addTitle("Observasjon 8");
const Ob9 = new Observation().addTitle("Observasjon 9");
const Ob10 = new Observation().addTitle("Observasjon 10");
const Ob11 = new Observation().addTitle("Observasjon 11");
const Ob12 = new Observation().addTitle("Observasjon 12");

//Functions
function createHTMLElement({ type, id, className, parent }) {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
}
