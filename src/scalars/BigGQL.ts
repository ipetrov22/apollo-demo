import Big from 'big.js';
import { GraphQLScalarType, Kind } from 'graphql';

export default new GraphQLScalarType({
  name: 'BigGQL',
  description: 'The `BigGQL` scalar type to represent currency values',

  serialize(value: any) {
    return new Big(value);
  },

  parseLiteral(ast) {
    if (ast.kind !== Kind.STRING) {
      throw new TypeError(`${String(ast)} is not a valid decimal value.`);
    }

    return Big(ast.value);
  },

  parseValue(value: any) {
    return Big(value);
  },
});
