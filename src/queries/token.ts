import { gql } from 'graphql-tag';

export const v2TokensQuery = gql`
  query Tokens(
    $orderDirection: String
    $orderBy: String
    $block: ListTokenBlockInput
    $where: ListTokenInput
    $skip: Int
    $first: Float
  ) {
    tokens(
      orderDirection: $orderDirection
      orderBy: $orderBy
      block: $block
      where: $where
      skip: $skip
      first: $first
    ) {
      id
      tokenAddress
      symbol
      name
      decimals
      tradeVolume
      tradeVolumeUSD
      untrackedVolumeUSD
      txCount
      totalLiquidity
      derivedHYDRA
    }
  }
`;

export const v3TokensQuery = gql`
  query Tokens(
    $orderDirection: OrderDirection
    $orderBy: Token_orderBy
    $block: Block_height
    $where: Token_filter
    $skip: Int
    $first: Int
  ) {
    tokens(
      orderDirection: $orderDirection
      orderBy: $orderBy
      block: $block
      where: $where
      skip: $skip
      first: $first
    ) {
      id
      symbol
      name
      decimals
      volume
      volumeUSD
      volumeUSDUntracked
      txCount
      totalValueLocked
      derivedETH
    }
  }
`;
