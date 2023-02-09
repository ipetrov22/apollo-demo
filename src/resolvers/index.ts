import { books } from './book-resolver';
import { pairs } from './pair-resolver';

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    books,
    pairs,
  },
};

export default resolvers;
