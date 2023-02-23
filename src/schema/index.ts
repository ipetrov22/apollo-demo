import { gql } from 'graphql-tag';

import { BlockType, ListBlockInput } from './block';
import { ListPairBlockInput, ListPairInput, PairType } from './pair';
import { ListTokenBlockInput, ListTokenInput, TokenType } from './token';

const schema = gql`
  # The "BigGQL" scalar type to represent currency values
  scalar BigGQL

  ${PairType}
  ${TokenType}
  ${BlockType}

  ${ListPairBlockInput}
  ${ListPairInput}
  ${ListTokenBlockInput}
  ${ListTokenInput}
  ${ListBlockInput}

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  type Query {
    pairs(
      block: ListPairBlockInput
      where: ListPairInput
      orderDirection: String
      orderBy: String
      skip: Int
      first: Float
    ): [Pair!]!
    tokens(
      orderDirection: String
      orderBy: String
      block: ListTokenBlockInput
      where: ListTokenInput
      skip: Int
      first: Float
    ): [Token!]!
    blocks(orderDirection: String, orderBy: String, first: Float, where: ListBlockInput): [Block!]
  }
`;

export default schema;
