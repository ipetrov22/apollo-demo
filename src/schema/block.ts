import gql from 'graphql-tag';

export const BlockType = gql`
  type Block {
    hash: String!
    height: Int!
    timestamp: Int!
    timestamp_from: Int
    timestamp_to: Int
    id: String
    number: Int
  }
`;

export const ListBlockInput = gql`
  input ListBlockInput {
    timestamp_gt: Int
    timestamp_lt: Int
    timestamp_eq: Int
    timestamp_gte: Int
    timestamp_lte: Int
    timestamp_in: [Int!]
  }
`;

interface BlocksFilter {
  timestamp_gt?: number;
  timestamp_lt?: number;
  timestamp_eq?: number;
  timestamp_gte?: number;
  timestamp_lte?: number;
  timestamp_in?: number[];
}

export interface BlocksArgs {
  where: BlocksFilter;
  first: number;
  orderBy: string;
  orderDirection: string;
}

export interface Block {
  hash: string;
  height: number;
  timestamp: number;
  timestamp_from: number;
  timestamp_to: number;
  id: string;
  number: number;
}
