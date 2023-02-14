import { pair, pairs } from './pair-resolver';
import { token, tokens } from './token-resolver';

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    pairs,
    tokens,
    pair,
    token,
  },
};

export default resolvers;
