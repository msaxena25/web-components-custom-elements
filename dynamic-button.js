class DynamicButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }
    connectedCallback() {
        const color = this.getAttribute('color');
        this.shadowRoot.innerHTML = `<button
                            style='color: white;padding:10px;background:${color}'
                            onclick="alert('${color} clicked')"
                            >
                            Dynamic Custom element Button - ${color}
                            </button>`;
    }
}

customElements.define('wc-dynamic-btn', DynamicButton);