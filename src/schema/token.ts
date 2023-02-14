import Big from 'big.js';
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

interface TokenFilter {
  id_in?: string[];
  id?: string;
  symbol_contains: string;
  name_contains?: string;
}

interface TokenBlockFilter {
  number: number;
}

export interface TokenArgs {
  first?: number;
  skip?: number;
  orderBy?: string;
  orderDirection?: string;
  where?: TokenFilter;
  block?: TokenBlockFilter;
}

export interface Token {
  id?: string;
  tokenAddress: string;
  symbol: string;
  name: string;
  decimals: Big;
  totalSupply?: Big;
  tradeVolume: Big;
  tradeVolumeUSD: Big;
  untrackedVolumeUSD: Big;
  txCount: Big;
  totalLiquidity: Big;
  derivedHYDRA: Big;
}
