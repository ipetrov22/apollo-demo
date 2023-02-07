import { getBooks } from './book-resolver';

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books: getBooks,
  },
};

export default resolvers;
