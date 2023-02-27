import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker";
import "professor-card/src/professor-card.js";
import "professor-card2/src/professor-card2";

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class CardList extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      display: inline-block;
    }

    main {
      flex-grow: 1;
    }

    .logo {
      margin-top: 36px;
      animation: app-logo-spin infinite 20s linear;
    }

    @keyframes app-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }

    .app-footer {
      font-size: calc(12px + 0.5vmin);
      align-items: center;
    }

    .app-footer a {
      margin-left: 5px;
    }
  `;

  constructor() {
    super();
    this.header = 'My app';
  }

  render() {
    return html`
      <professor-card2>
        <p>Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
      </professor-card2>
      <professor-card2>
        <p>Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
      </professor-card2>
      <professor-card2>
        <p>Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
      </professor-card2>
      <professor-card2>
        <p>Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
      </professor-card2>
      <professor-card2>
        <p>Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
      </professor-card2>
      
      <professor-card>
        <ul>
          <li>Age: Unknowable</li>
          <li>Positions: God</li>
          <li>Years of Service: Infinite</li>
          <li>COMPLETELY COMPLETE</li>
        </ul>
      </professor-card>
      <professor-card>
        <ul>
          <li>Age: Unknowable</li>
          <li>Positions: God</li>
          <li>Years of Service: Infinite</li>
          <li>COMPLETELY COMPLETE</li>
        </ul>
      </professor-card>
      <professor-card>
        <ul>
          <li>Age: Unknowable</li>
          <li>Positions: God</li>
          <li>Years of Service: Infinite</li>
          <li>COMPLETELY COMPLETE</li>
        </ul>
      </professor-card>
      <professor-card>
        <ul>
          <li>Age: Unknowable</li>
          <li>Positions: God</li>
          <li>Years of Service: Infinite</li>
          <li>COMPLETELY COMPLETE</li>
        </ul>
      </professor-card>
      <professor-card>
        <ul>
          <li>Age: Unknowable</li>
          <li>Positions: God</li>
          <li>Years of Service: Infinite</li>
          <li>COMPLETELY COMPLETE</li>
        </ul>
      </professor-card>
    `;
  }
}

customElements.define('card-list', CardList);