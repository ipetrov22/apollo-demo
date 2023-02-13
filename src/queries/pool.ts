// V3 Pool queries
import { gql } from 'graphql-tag';

export const poolsQuery = gql`
  query Pools(
    $block: ListPairBlockInput
    $where: ListPairInput
    $orderDirection: String
    $orderBy: String
    $skip: Int
    $first: Float
  ) {
    pools(
      block: $block
      where: $where
      orderDirection: $orderDirection
      orderBy: $orderBy
      skip: $skip
      first: $first
    ) {
      id
      token0 {
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
      token1 {
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
      totalValueLockedToken0
      totalValueLockedToken1
      totalValueLockedETH
      totalValueLockedUSD
      token0Price
      token1Price
      volumeToken0
      volumeToken1
      volumeUSD
      volumeUSDUntracked
      txCount
      createdAtTimestamp
      createdAtBlockNumber
      liquidityProviderCount
    }
  }
`;

// // v2Prop: v3Prop
// const map = {
//   pairAddress: 'id',
//   tokenAddress: 'id',
//   tradeVolume: 'volume',
//   tradeVolumeUSD: 'volumeUSD',
//   untrackedVolumeUSD: 'volumeUSDUntracked',
//   totalLiquidity: 'totalValueLocked',
//   derivedHYDRA: 'derivedETH',
//   reserve0: 'totalValueLockedToken0',
//   reserve1: 'totalValueLockedToken1',
//   reserveHYDRA: 'totalValueLockedETH',
//   reserveUSD: 'totalValueLockedUSD',
//   trackedReserveHYDRA: 'totalValueLockedETH',
//   // untrackedVolumeUSD: 'volumeUSDUntracked' pool object
// };
