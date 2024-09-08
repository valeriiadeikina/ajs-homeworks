import Buyable from "./Buyable";

export default class Book implements Buyable {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly author: string,
    readonly price: number,
    readonly pages: number,
  ) {
    this.id = id;
    this.name = name;
    this.name = author;
    this.price = price;
    this.pages = pages;
  }
}
