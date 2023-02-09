import { gql } from 'graphql-tag';

export const TokenType = gql`
  type Token {
    id: String!
    tokenAddress: String!
    symbol: String!
    name: String!
    decimals: Int!
    totalSupply: Int!
    tradeVolume: BigGQL!
    tradeVolumeUSD: BigGQL!
    untrackedVolumeUSD: BigGQL!
    txCount: Int!
    totalLiquidity: BigGQL!
    derivedHYDRA: BigGQL!
  }
`;

export const ListTokenBlockInput = gql`
  input ListTokenBlockInput {
    number: Float!
  }
`;

export const ListTokenInput = gql`
  input ListTokenInput {
    id_in: [String!]
    id: String
    symbol_contains: String
    name_contains: String
  }
`;
