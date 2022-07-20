class GreenButton extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div>
        <div>It use Parent Styles as well</div>
        <button
        style='color: white;background:#4aae0b'
        onclick="alert('Green clicked')"
        >
        Custom Element Button without Shadow dom
        </button>
        </div>
       `;
    }
}

customElements.define('wc-green-btn', GreenButton);