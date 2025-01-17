class GreetingMessage extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = "<p>Click Me For Greeting, Fellar !</p>";
    }

    connectedCallback() {
        this.addEventListener('click', function () {
                alert("Georgia is a nice country by the way !");
            });
    }
}

customElements.define('greeting-message', GreetingMessage);
