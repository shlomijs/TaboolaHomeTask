export class RecommendationWidget extends HTMLElement {
    connectedCallback() {
        // console.log(JSON.parse(this.getAttribute('items')));
        console.log(this.getAttribute('items'))
        this.innerHTML = `<h1>Hello world</h1>`;
    }

}
customElements.define('recommendation-widget', RecommendationWidget);