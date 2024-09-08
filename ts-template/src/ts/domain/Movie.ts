export default class Movie {
  constructor(
    readonly id: number,
    readonly name: string,
    readonly year: number,
    readonly country: string,
    readonly moto: string,
    readonly genre: string,
    readonly duration: number,
    readonly price: number,
  ) {
    this.id = id;
    this.name = name;
    this.country = country;
    this.year = year;
    this.moto = moto;
    this.duration = duration;
    this.genre = genre;
    this.price = price;
  }
}
