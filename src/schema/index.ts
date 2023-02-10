import { gql } from 'graphql-tag';

import { ListPairBlockInput, ListPairInput, PairType } from './pair';
import { ListTokenBlockInput, ListTokenInput, TokenType } from './token';

const schema = gql`
  type Book {
    title: String
    author: String
  }

  # The "BigGQL" scalar type to represent currency values
  scalar BigGQL

  ${PairType}
  ${TokenType}

  ${ListPairBlockInput}
  ${ListPairInput}
  ${ListTokenBlockInput}
  ${ListTokenInput}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  type Query {
    books: [Book]
    pairs(
      block: ListPairBlockInput
      where: ListPairInput
      orderDirection: String
      orderBy: String
      skip: Int
      first: Float
    ): [Pair!]!
    pair(block: ListPairBlockInput, id: String!): Pair
    token(block: ListTokenBlockInput, id: String!): Token
    tokens(
      orderDirection: String
      orderBy: String
      block: ListTokenBlockInput
      where: ListTokenInput
      skip: Int
      first: Float
    ): [Token!]!
  }
`;

export default schema;
