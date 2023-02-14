// V3 Pool queries
import { gql } from 'graphql-tag';

export const poolsQuery = gql`
  query Pools(
    $block: Block_height
    $where: Pool_filter
    $orderDirection: OrderDirection
    $orderBy: Pool_orderBy
    $skip: Int
    $first: Int
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
