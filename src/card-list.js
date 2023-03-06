import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker";
import "professor-card/src/professor-card.js";
import "professor-card2/src/professor-card2.js";

class CardList extends LitElement {
  static properties = {}

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
      <!--Winston's Cards-->
      <professor-card2> <!--Default Card-->
        <p>Professor Giacobe may look like a simple man but perceptions can be misleading. Underneath the facade of a simple college of IST professor lies the holiness of an <strong>IST GOD</strong>!</p>
      </professor-card2>
      <professor-card2 
        title="Professor Ollendyke"
        subtitle="Rad of Web IST"
        infoLabel="Push It"
        profilePic="https://th.bing.com/th/id/OIP.IhtX03uyr__34k-UQ9KCKwHaHa?pid=ImgDet&rs=1"
        top="Ollendyke"
        bottom="Moment">
        <p>He don't like React for a fact! He also doesn't like IDs. Or inline CSS modifier.</p>
      </professor-card2>
      <professor-card2
        title="Professor Erwin"
        subtitle="English man with english plan"
        infoLabel="Poosh It"
        profilePic="https://cdn.discordapp.com/attachments/434857360155213827/1082054956376408115/erwinpic.png"
        top="Fedora"
        bottom="Haver">
        <p>Tired of freshman english. Funny jokes according to Joe (I had Professor Ganoe). ENGL 15 moment.</p>
      </professor-card2>
      <professor-card2
        title="Professor Sylvester"
        subtitle="Mathematical Chadical"
        infoLabel="Calculate it"
        profilePic="https://ist.psu.edu/sites/default/files/directory/Sylvester-Kevin.jpg"
        top="Flannel"
        bottom="Friday">
        <p>Proof by induction, proof by contradiction, proof by contrapositive, proof by exhaustion, proof by I forget the rest</p>
      </professor-card2>
      <professor-card2
        title="Professor Hozza"
        subtitle="Professor of Basedness"
        infoLabel="Secure It"
        profilePic="https://ist.psu.edu/sites/default/files/directory/Hozza-David.jpg"
        top="Ice Cream"
        bottom="Prizes">
        <p>Cybesecuring the world one class at a time. RSA, SHA, TCP, UDP, SSH, HTTPS, other words</p>
      </professor-card2>

      <!--Joe's Cards (Didn't put a default because both of our defaults are the same person-->
      <professor-card 
        name="Professor Welch"
        position="Coder Broder of IST"
        detailLabel="Coding Info"
        picture="https://ist.psu.edu/sites/default/files/directory/Welch-Dan.jpg"
        top="Constant"
        bottom="Student Emails">
        <ul>
          <li>Coding Level: Epic</li>
          <li>Positions: Chad</li>
          <li>Years of Service: Infinite</li>
          <li>Cool Professor</li>
        </ul>
      </professor-card>
      <professor-card
        name="Professor Ocker"
        position="Doc Ock"
        detailLabel="Secret Plans"
        picture="https://i1.rgstatic.net/ii/profile.image/272830751309830-1442059328955_Q512/Rosalie-Ocker.jpg"
        top="Spider-Man's"
        bottom="Worst Enemy">
        <p>SQL databasing the galaxy</p>
      </professor-card>
      <professor-card
        name="Professor Fisher"
        position="Doer of Cool New Things"
        detailLabel="Java Info"
        picture="https://media.licdn.com/dms/image/C4E03AQHMegdZ2adIWA/profile-displayphoto-shrink_800_800/0/1643143092339?e=2147483647&v=beta&t=x_Jn02FxmbfExA33fC4yHmysjSsA371376wvocN5m3U"
        top="Amazon"
        bottom="Programmering">
        <p>Java do be javaing the Java of Java's Java. (Idk why I felt like writing this.)</p>
      </professor-card>
      <professor-card
      name="Professor Hodgson"
      position="Risker"
      detailLabel="Analysis of Analysizers"
      picture="https://media.licdn.com/dms/image/C4E03AQFZdMqaXc0Ycw/profile-displayphoto-shrink_800_800/0/1605624905878?e=2147483647&v=beta&t=CQLwMZFbWuMPFzK929mlfvtdxdftVsT8xjTlSXtjBao"
      top="G.O.A.T."
      bottom="of SRA">
        <p>I forget the joke that Joe wanted to say.</p>
      </professor-card>
      <professor-card
      name="Professor Haynes"
      position="Bringer of Gainz"
      detailLabel="Design Info"
      picture="https://ist.psu.edu/sites/default/files/directory/Haynes-Steven.jpg"
      top="Mushroom Science"
      bottom="And Technology">
        <p>Human-computer interaction of a fraction with the design and development of the envelopment of a somethingment. Rhymes are hard!</p>
      </professor-card>
    `;
  }
}

customElements.define('card-list', CardList);