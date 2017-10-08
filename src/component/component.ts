import { message } from "./message";
import { Templates } from "./templates";

// for webpack to import the styles in the bundling pipeline
import "./style.css";

export class TestComponent {
    // HTML tag where the component will be mount
    // ex. <div>Component code</div>
    private targetContainer: HTMLElement;

    // hTML Elemts that constitute the component UI
    private textBox: HTMLInputElement;
    private label: HTMLParagraphElement;

    // internal defaults
    private defaultMessage: message;
    private defaultInput = "strange";

    constructor(private targetContainerId: string) {

    }

    public initialize() {
        this.defaultMessage = this.buildMessage(this.defaultInput);
        this.targetContainer = document.getElementById(this.targetContainerId);
        this.targetContainer.innerHTML = Templates.GetTemplate();
        this.label = document.getElementById("display-message") as HTMLParagraphElement;
        this.textBox = document.getElementById("user-input") as HTMLInputElement;
        this.addListeners();
    }

    public addListeners() {
        this.textBox.addEventListener("input", (event) => {
            const value = (event.srcElement as HTMLInputElement).value;
            this.defaultMessage.name = value.length > 0 ? value  : this.defaultInput;
            this.renderMessage(this.defaultMessage);
        });
    }

    public renderMessage(theMessage: message) {
        this.label.innerText = this.sayHello(theMessage);
    }

    public sayHello(theMessage: message) {
        return `hello <b>${theMessage.name}!!!</b> today is ${theMessage.date}`;
    }

    public buildMessage(name: string): message {
        return {
            date: Date(),
            name,
        };
    }
}
