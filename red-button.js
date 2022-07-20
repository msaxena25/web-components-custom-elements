class RedButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'}); //attaches a shadow DOM tree to <test-element> and returns a reference
    }
    connectedCallback() {
        const template = `
        <div>
        <div>Styling is locally scoped and it cannot use Parent Styles</div>
        <button
            style='color: white;background:red;padding:10px'
            onclick="alert('Red clicked')"
            >
            Custom element Button with Shadow dom
            </button>
        </div>`;
        this.shadowRoot.innerHTML = template;
    }
}

customElements.define('wc-red-btn', RedButton);