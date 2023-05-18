import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-component')

export class MyComponent extends LitElement {

  render() {
    return html`<h1>Hello from my-component</h1><h2>Lit Web Components</h2>`;
  }
}

