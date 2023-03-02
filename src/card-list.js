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
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <professor-card2>
        <p>Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
      </professor-card2>
      <professor-card2 
        title="Professor Ollendyke"
        subtitle="Rad of Web IST"
        pic="https://th.bing.com/th/id/OIP.IhtX03uyr__34k-UQ9KCKwHaHa?pid=ImgDet&rs=1"
        top="Ollendyke"
        bottom="Moment">
        <p>He don't like React for a fact!</p>
      </professor-card2>
      <professor-card2
        title="Professor Erwin"
        subtitle="English man with english plan"
        pic="https://english.la.psu.edu/wp-content/uploads/sites/2/2022/08/Erwin-Mark-small-New-Faculty-22-0338.jpg"
        top="Fedora"
        bottom="Posessesor">
        <p>Tired of freshman english.</p>
      </professor-card2>
      <professor-card2
        title="Professor Sylvester"
        subtitle="Mathematical Chadical"
        pic="https://ist.psu.edu/sites/default/files/directory/Sylvester-Kevin.jpg"
        top="Flannel"
        bottom="Friday">
        <p>Proof by induction</p>
      </professor-card2>
      <professor-card2
        title="Professor Hozza"
        subtitle="Professor of Basedness"
        pic="https://ist.psu.edu/sites/default/files/directory/Hozza-David.jpg"
        top="Ice Cream"
        bottom="Prizes">
        <p>Cybesecuring the world one class at a time</p>
      </professor-card2>

      <professor-card
        name="Professor Welch"
        position="Coder Broder of IST"
        picture="https://ist.psu.edu/sites/default/files/directory/Welch-Dan.jpg"
        top="Constant"
        bottom="Student Emails">
        <p>Kentucky derby idk what I'm writing</p>
      </professor-card>
      <professor-card
        name="Professor Ocker"
        position="Doc Ock"
        picture="https://i1.rgstatic.net/ii/profile.image/272830751309830-1442059328955_Q512/Rosalie-Ocker.jpg"
        top="Spider-Man's"
        bottom="Worst Enemy">
        <p>SQL databasing the galaxy</p>
      </professor-card>
      <professor-card
        name="Dr. Fisher"
        position="Doing cool new things"
        picture="https://media.licdn.com/dms/image/C4E03AQHMegdZ2adIWA/profile-displayphoto-shrink_800_800/0/1643143092339?e=2147483647&v=beta&t=x_Jn02FxmbfExA33fC4yHmysjSsA371376wvocN5m3U"
        top="Amazon"
        bottom="Programmering">
        <p>Java of the java</p>
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