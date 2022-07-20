const template = document.createElement('template'); // create template element.

template.innerHTML = `
<h4>HTML Forms</h4>
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname"><br><br>
  <input type="button" value="Submit">
</form>
`;


class WcForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        /**
         * template.content -  It will work only if you are using this component single time
         * template.content.cloneNode(true) - It will create clone copy of template so you can use this multiple time without any error
         */
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        console.log("this.getAttribute('fname')", this.getAttribute('fname'), ' inside constructor'); // This is null at this point
        this.submitBtn.addEventListener('click', () => this.btnClick())
    }
    btnClick() {
        alert(`Form submitted: -
        ${this.shadowRoot.querySelector('#fname').value} &
        ${this.shadowRoot.querySelector('#lname').value}`);
    }
    get submitBtn() {
        return this.shadowRoot.querySelector('input[type="button"]');
    }
    connectedCallback() {
        this.shadowRoot.querySelector('#fname').value = this.getAttribute('fname');
        this.shadowRoot.querySelector('#lname').value = this.getAttribute('lname');
    }
    disconnectedCallback() {
        this.submitBtn.removeEventListener();
    }
}

customElements.define('wc-form', WcForm);