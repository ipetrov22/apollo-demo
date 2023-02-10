import { gql } from 'graphql-tag';

export const PairType = gql`
  type Pair {
    id: String!
    pairAddress: String
    token0: Token!
    token1: Token!
    reserve0: BigGQL!
    reserve1: BigGQL!
    totalSupply: BigGQL!
    reserveHYDRA: BigGQL!
    reserveUSD: BigGQL!
    trackedReserveHYDRA: BigGQL!
    token0Price: BigGQL!
    token1Price: BigGQL!
    volumeToken0: BigGQL!
    volumeToken1: BigGQL!
    volumeUSD: BigGQL!
    untrackedVolumeUSD: BigGQL!
    txCount: Int!
    createdAtTimestamp: Int!
    createdAtBlockNumber: Int!
    liquidityProviderCount: Int!
    _oneDayVolumeUSD: BigGQL!
    _oneWeekVolumeUSD: BigGQL!
  }
`;

export const ListPairBlockInput = gql`
  input ListPairBlockInput {
    number: Float!
  }
`;

export const ListPairInput = gql`
  input ListPairInput {
    id_in: [String!]
    id: String
    token0: String
    token1: String
    token0_in: [String!]
    token1_in: [String!]
  }
`;

interface ListPairInterface {
  id_in?: string[];
  id?: string;
  token0?: string;
  token1?: string;
  token0_in?: string[];
  token1_in?: string[];
}
interface ListPairBlockInput {
  number: number;
}

export interface PairsArgs {
  first?: number;
  skip?: number;
  orderBy?: string;
  orderDirection?: string;
  where?: ListPairInterface;
  block?: ListPairBlockInput;
}
