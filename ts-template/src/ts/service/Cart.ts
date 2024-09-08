import Buyable from "../domain/Buyable";
import Movie from "../domain/Movie";

export default class Cart {
  private _items: Array<Buyable | Movie> = [];

  add(item: Buyable | Movie): void {
    this._items.push(item);
  }

  get items(): Array<Buyable | Movie> {
    return [...this._items];
  }

  countFullPrice(): number {
    return this.items.reduce((acc, item) => item.price + acc, 0);
  }

  countPriceWithDiscount(discount: number): number {
    return (
      (this.items.reduce((acc, item) => item.price + acc, 0) *
        (100 - discount)) /
      100
    );
  }

  removeItemFromCart(itemId: number): void {
    this._items = this._items.filter((item) => item.id !== itemId);
  }
}
