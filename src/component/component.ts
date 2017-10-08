import { IMessage } from "./message";
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
    private defaultMessage: IMessage;
    private defaultInput = "strange";

    constructor(private targetContainerId: string) {

    }

    public initialize() {
        this.defaultMessage = this.buildMessage(this.defaultInput);
        this.targetContainer = document.getElementById(this.targetContainerId);
        this.targetContainer.innerHTML = Templates.GetTemplate();
        this.label = document.querySelector(`div#${this.targetContainerId} p#display-message`) as HTMLParagraphElement;
        this.textBox = document.querySelector(`div#${this.targetContainerId} input#user-input`) as HTMLInputElement;
        this.addListeners();
        this.renderMessage(this.defaultMessage);
    }

    public addListeners() {
        this.textBox.addEventListener("input", (event) => {
            const value = (event.srcElement as HTMLInputElement).value;
            this.defaultMessage.name = value.length > 0 ? value  : this.defaultInput;
            this.renderMessage(this.defaultMessage);
        });
    }

    public renderMessage(theMessage: IMessage) {
        this.label.innerText = this.sayHello(theMessage);
    }

    public sayHello(theMessage: IMessage) {
        return `hello ${theMessage.name}!!! today is ${theMessage.date}`;
    }

    public buildMessage(name: string): IMessage {
        return {
            date: Date(),
            name,
        };
    }
}
