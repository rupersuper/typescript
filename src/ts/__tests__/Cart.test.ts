import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import MusicAlbum from '../domain/MusicAlbum';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('new card should be no empty', () => {
  const cart = new Cart();
cart.add(new Movie(1002, 'The Avengers', 5000, 2012, 'USA', 'Avengers Assemble!', ['Fantasy', 'Action', 'Adventure'], 137));

  expect(cart.items).toEqual([{
      id: 1002,
      name: 'The Avengers',
      price: 5000,
      year: 2012,
      country: 'USA',
      tagline: 'Avengers Assemble!',
      genre: ['Fantasy', 'Action', 'Adventure'],
      duration: 137
    }]);
});

test('totalSum', () => {
  const cart = new Cart();
cart.add(new Movie(1002, 'The Avengers', 5000, 2012, 'USA', 'Avengers Assemble!', ['Fantasy', 'Action', 'Adventure'], 137));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.calculateTotal()).toBe(7900);
});

test('totalSum без товаров', () => {
  const cart = new Cart();

  expect(cart.calculateTotal()).toBe(0);
});

test('calculateDiscount', () => {
  const cart = new Cart();
cart.add(new Movie(1002, 'The Avengers', 5000, 2012, 'USA', 'Avengers Assemble!', ['Fantasy', 'Action', 'Adventure'], 137));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.calculateDiscount(10)).toBe(7110);
});

test('removeItem', () => {
  const cart = new Cart();
cart.add(new Movie(1002, 'The Avengers', 5000, 2012, 'USA', 'Avengers Assemble!', ['Fantasy', 'Action', 'Adventure'], 137));
cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

cart.removeItem(1002)

  expect(cart.items).toEqual([{
    author: "Leo Tolstoy",
    id: 1001,
    name: "War and Piece",
    pages: 1225,
    price: 2000
  }, {
    author: "Linkin Park",
    id: 1008,
    name: "Meteora",
    price: 900
  }]);
});