import { templates } from './templates'
import { message } from './message';
// For webpack to import the styles in the bundling pipeline
import './style.css';

export class testComponent {
    // HTML tag where the component will be mount
    // ex. <div>Component code</div>
    private targetContainer: HTMLElement

    // HTML Elemts that constitute the component UI
    private textBox: HTMLInputElement
    private label: HTMLParagraphElement

    // Internal defaults
    private defaultMessage: message   
    private defaultInput:string = 'strange'
    
    
    constructor(private targetContainerId: string) {
       
    }

    initialize() {
        this.defaultMessage = this.buildMessage(this.defaultInput)        
        this.targetContainer = document.getElementById(this.targetContainerId)
        this.targetContainer.innerHTML = templates.GetTemplate()
        this.label = document.getElementById('display-message') as HTMLParagraphElement
        this.textBox = document.getElementById('user-input') as HTMLInputElement
        this.addListeners()       
    }

    addListeners() {
        this.textBox.addEventListener('input', (event) => {
            let value = (event.srcElement as HTMLInputElement).value
            this.defaultMessage.name = value.length > 0 ? value  : this.defaultInput           
            this.renderMessage(this.defaultMessage)
        })
    }

    renderMessage(message: message) {
        this.label.innerText = this.sayHello(message)
    }

    sayHello(message: message) {
        return `hello <b>${message.name}!!!</b> today is ${message.date}`
    }

    buildMessage(name: string): message {
        return {
            name: name,
            date: Date()
        }
    }
}