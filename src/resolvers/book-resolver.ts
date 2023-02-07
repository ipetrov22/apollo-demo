import { getBooks } from '../services/book-service';

export function books() {
  const books = getBooks();
  return books;
}
