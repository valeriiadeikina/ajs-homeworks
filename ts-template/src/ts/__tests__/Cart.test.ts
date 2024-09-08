import Cart from "../service/Cart";
import Movie from "../domain/Movie";
import Book from "../domain/Book";
import Buyable from "../domain/Buyable";

test("new cart should be empty", () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

describe("Cart tests", () => {
  let cart: Cart;
  let movie: Movie;
  let book: Buyable;

  beforeEach(() => {
    cart = new Cart();
    movie = new Movie(
      1,
      "что-то",
      2024,
      "Russia",
      "watch or die",
      "drama",
      10000,
      150,
    );
    book = new Book(23, "strangers", "noname", 10500, 500);
    cart.add(movie);
    cart.add(book);
  });

  test("add item to the cart", () => {
    expect(cart.items.length).toBe(2);
  });

  test("remove item from the cart", () => {
    cart.removeItemFromCart(23);

    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toBe(movie);
  });

  test("count full cart price", () => {
    const fullPrice = cart.countFullPrice();
    expect(fullPrice).toBe(10650);
  });

  
  test("count cart price with discount", () => {
    const fullPrice = cart.countPriceWithDiscount(10);
    expect(fullPrice).toBe(9585);
  });
});
