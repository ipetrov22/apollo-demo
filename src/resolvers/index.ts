import { blocks } from './block-resolver';
import { pairs } from './pair-resolver';
import { tokens } from './token-resolver';

// Resolvers define how to fetch the types defined in your schema.
const resolvers = {
  Query: {
    pairs,
    tokens,
    blocks,
  },
};

export default resolvers;
