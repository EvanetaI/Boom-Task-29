import {formatCurrency} from './utils'
import classNames from "classnames";

export default class Notification {
  static get types() {
    return {
      PEPPERONI: "pepperoni",
      MARGHERITA: "margherita",
      HAWAIIAN: "hawaiian",
    };
  }

  constructor() {
    this.container = document.createElement("div");
    this.container.classList.add("notification-container");
    // const closeBtn = document.querySelector(".delete")
    // closeBtn.addEventListener("click", close)
  }

  render({ type, price }) {
    const template = `
    <div class="notification type-${type} ${classNames({
      "is-danger": type === Notification.types.HAWAIIAN,
    })}">
      <button class="delete"></button>
      🍕 <span class="type">${type}</span> (<span class="price">${formatCurrency(price)}</span>) has been added to your order.
    </div>
        `;

    this.container.innerHTML = template;
    document.querySelector(".main").appendChild(this.container);
    const closeBtn = document.querySelector(".delete")
    closeBtn.addEventListener("click", this.closeNotification.bind(this))
  }

  closeNotification(){
    this.container.remove()
  }

  empty(){
  }

}
