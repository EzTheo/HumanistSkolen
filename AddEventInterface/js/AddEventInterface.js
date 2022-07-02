const students = JSON.parse(localStorage.getItem("students")) ?? [];
document.querySelector("form").addEventListener("submit", getData);

function test() {
    const extraField = createHTMLElement({
        type: "input",
        id: "extra-field",
        parent: "#typeDiv",
    });
    const extraFieldLabel = createHTMLElement({
        type: "label",
        id: "extra-field-label",
        parent: "#typeDiv",
    });
    extraFieldLabel.innerHTML = "Extra field";
    extraField.setAttribute("type", "text");
    extraField.setAttribute("name", "extra-field");
    extraFieldLabel.setAttribute("for", "extra-field");
}
function removeTest() {
    document.querySelector("#extra-field")?.remove();
    document.querySelector("#extra-field-label")?.remove();
}

//
function createHTMLElement({ type, id, className, parent }) {
    const newElement = document.createElement(type);
    newElement.id = id;
    newElement.className = className;
    document.querySelector(parent).appendChild(newElement);
    return newElement;
}

function getData(event) {
    event.preventDefault();
    const name = this.querySelector("[name=search]").value;
    const type = this.querySelector("[name=event]").value;
    const title = this.querySelector("[name=title]").value;
    const content = this.querySelector("[name=content]").value;
    const student = { name, type, title, content };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    console.log(JSON.stringify(students));
}
