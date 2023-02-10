import { gql } from 'graphql-tag';

export const pairsQuery = gql`
  query Pairs(
    $block: ListPairBlockInput
    $where: ListPairInput
    $orderDirection: String
    $orderBy: String
    $skip: Int
    $first: Float
  ) {
    pairs(
      block: $block
      where: $where
      orderDirection: $orderDirection
      orderBy: $orderBy
      skip: $skip
      first: $first
    ) {
      id
      pairAddress
      token0 {
        id
        tokenAddress
        symbol
        name
        decimals
        totalSupply
        tradeVolume
        tradeVolumeUSD
        untrackedVolumeUSD
        txCount
        totalLiquidity
        derivedHYDRA
      }
      token1 {
        id
        tokenAddress
        symbol
        name
        decimals
        totalSupply
        tradeVolume
        tradeVolumeUSD
        untrackedVolumeUSD
        txCount
        totalLiquidity
        derivedHYDRA
      }
      reserve0
      reserve1
      totalSupply
      reserveHYDRA
      reserveUSD
      trackedReserveHYDRA
      token0Price
      token1Price
      volumeToken0
      volumeToken1
      volumeUSD
      untrackedVolumeUSD
      txCount
      createdAtTimestamp
      createdAtBlockNumber
      liquidityProviderCount
      _oneDayVolumeUSD
      _oneWeekVolumeUSD
    }
  }
`;
