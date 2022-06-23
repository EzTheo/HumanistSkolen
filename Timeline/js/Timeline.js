//Object Classes
class Event {
    constructor({ type, className, parent } = {}) {
        this.event = createHTMLElement({
            type: type ?? "section",
            className: className ?? "event",
            parent: parent,
        });
        this.event.addEventListener("click", this.clicked.bind(this));
        this.title;
        this.text;
        return this;
    }
    clicked() {
        const popUp = createHTMLElement({
            type: "section",
            id: "popup",
            parent: "body",
        });
        popUp.innerHTML = this.event.innerHTML;
        const popUpCross = createHTMLElement({
            type: "div",
            id: "popup-cross",
            parent: "#popup",
        });
        popUpCross.addEventListener("click", () =>
            document.querySelector("#popup").remove()
        );
        popUp.focus();
        return this;
    }
    addTitle(title) {
        this.title = document.createElement("h1");
        this.title.innerHTML = title ?? "Title";
        this.event.appendChild(this.title);
        return this;
    }
    addText(text) {
        this.text = document.createElement("p");
        this.text.className = "event-text";
        this.text.innerHTML = text ?? "Text";
        this.text.style.maxWidth = `${
            this.title ? this.title.getBoundingClientRect().width * 0.08 : 20
        }em`;
        this.text.style.minWidth = `15em`;
        this.event.appendChild(this.text);
        return this;
    }
    addTag(name, value) {
        this.event.setAttribute(name, value);
        return this;
    }
    removeTag(name) {
        this.event.removeAttribute(name);
        return this;
    }
}
class Observation extends Event {
    constructor() {
        super({ parent: "#observations" });
    }
    status(read, treated) {
        this.event.style.backgroundColor = read
            ? treated
                ? "gray"
                : "#ffe761"
            : "#8ecae6";
        return this;
    }
}
class ToDo extends Event {
    constructor() {
        super({ parent: "#to-dos" });
    }
    addTime() {}
}

//Objects
const ToDo1 = new ToDo().addTitle("event 1");
const ToDo2 = new ToDo().addTitle("event 2");
const ToDo4 = new ToDo().addTitle("event 3");

const Ob1 = new Observation().addTitle("observation 1").status(true, false);
const Ob2 = new Observation().addTitle("En lengre tittel").status(true, true);
const Ob3 = new Observation().addTitle("event 6").status(false);

//Functions
function createHTMLElement({ type, id, className, parent }) {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
}
