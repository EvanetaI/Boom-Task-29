import EventEmitter from "eventemitter3";
import Card from "./Card";
import Notification from "./Notification";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();

    const pizzas = [
      {
        type: Card.types.HAWAIIAN,
        price: 8.99,
      },
      {
        type: Card.types.PEPPERONI,
        price: 9.99,
      },
      {
        type: Card.types.MARGHERITA,
        price: 7.99,
      },
    ];
    const notification = new Notification();
    pizzas.forEach((pizza) => {
      const card = new Card({ ...pizza });
      card.render();
      card.on(Card.events.ADD_TO_CART, (e)=>notification.render({ ...e }))
      document.querySelector(".main").appendChild(card.container);
    });
   
    this.emit(Application.events.READY);
    //this.on(Card.events.ADD_TO_CART, notification.render)
  }
}
