import { css, html, LitElement } from "lit"
import React from "react"
import { customElement, property } from "lit/decorators.js"
import { createComponent } from "@lit/react"

@customElement("my-banner")
export class MyBanner extends LitElement {
  static styles = css`
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
  @property({ type: String })
  title = "Section Title"

  @property({ type: String })
  image = "https://placehold.co/1507x520"

  render() {
    return html`
      <section class="banner">
        <img src=${this.image} alt="Placeholder Image" />
        <div class="banner-content">
          <h2 class="banner-title">${this.title}</h2>
        </div>
      </section>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-banner": MyBanner
  }
}

// React Component
export const MyBannerReact = createComponent({
  tagName: "my-banner",
  elementClass: MyBanner,
  react: React,
})
