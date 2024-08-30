import {
  LitElement,
  html,
  css,
} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js"

export class SimpleGreeting extends LitElement {
  static properties = {
    title: {},
    image: {},
  }

  static styles = css`
    :host {
    }

    .banner {
      font-family: "Inter", sans-serif;
      padding: 40px 0;
      max-width: 1680px;
      margin: 0 auto;
      position: relative;

      & img {
        height: auto;
        max-width: 100%;
        border-radius: 30px;
      }

      .banner-content {
        color: #fff;
        max-width: 480px;
        padding: 0 93px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;

        .banner-title {
          font-size: 32px;
          font-weight: 500;
        }
      }
    }
  `
  // static styles = [styles]

  constructor() {
    super()
    // Declare reactive properties
    this.title = ""
    this.image = ""
  }

  // Render the UI as a function of component state
  render() {
    return html` <section class="banner">
      <img src=${this.image} alt="Placeholder Image" />
      <div class="banner-content">
        <h2 class="banner-title">${this.title}</h2>
      </div>
    </section>`
  }
}
customElements.define("simple-greeting", SimpleGreeting)
