import { css, html, LitElement } from "lit"
import React from "react"
import { customElement, property } from "lit/decorators.js"
import { when } from "lit/directives/when.js"
import { classMap } from "lit/directives/class-map.js"
import { createComponent } from "@lit/react"

@customElement("my-panel")
export class MyPanel extends LitElement {
  static styles = css`
    .title {
      background-color: var(--my-panel-primary-bg, #000);
      color: var(--my-panel-primary-color, #fff);
      padding: 0.8rem;
      border-radius: 1rem 1rem 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.3s ease-in-out;

      &.closed {
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
      }
    }

    .body {
      padding: 1rem;
      border: 1px solid aquamarine;
    }
  `

  @property({ type: String })
  title = "WIDGET"

  @property({ type: Boolean })
  opened = false

  @property({ type: String })
  icon = ""

  private onIconClickedHandler(e: Event) {
    e.stopPropagation()
    this.dispatchEvent(new CustomEvent("icon-click", { bubbles: true }))
  }

  render() {
    return html`
      <div>
        <div
          class=${classMap({ title: true, closed: !this.opened })}
          @click=${() => (this.opened = !this.opened)}
        >
          ${this.title}
          <span @click=${this.onIconClickedHandler}>${this.icon}</span>
        </div>

        ${when(
          this.opened,
          () => html` <div class="body">
            <slot></slot>
          </div>`
        )}
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-panel": MyPanel
  }
}

// React Component
export const MyPanelReact = createComponent({
  tagName: "my-panel",
  elementClass: MyPanel,
  react: React,
  events: {
    onIconClick: "icon-click",
  },
})
