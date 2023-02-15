import { Pair } from '../schema/pair';
import { Token } from '../schema/token';

export function convertV3PoolToV2Pair(v3Pool): Pair {
  return {
    id: v3Pool.id,
    pairAddress: v3Pool.id,
    token0: {
      tokenAddress: v3Pool.token0.id,
      symbol: v3Pool.token0.symbol,
      name: v3Pool.token0.name,
      decimals: v3Pool.token0.decimals,
      tradeVolume: v3Pool.volumeToken0,
      tradeVolumeUSD: v3Pool.volumeUSD,
      untrackedVolumeUSD: v3Pool.volumeUSDUntracked,
      txCount: v3Pool.txCount,
      totalLiquidity: v3Pool.totalValueLockedToken0,
      derivedHYDRA: v3Pool.token0.derivedETH,
    },
    token1: {
      tokenAddress: v3Pool.token1.id,
      symbol: v3Pool.token1.symbol,
      name: v3Pool.token1.name,
      decimals: v3Pool.token1.decimals,
      tradeVolume: v3Pool.volumeToken1,
      tradeVolumeUSD: v3Pool.volumeUSD,
      untrackedVolumeUSD: v3Pool.volumeUSDUntracked,
      txCount: v3Pool.txCount,
      totalLiquidity: v3Pool.totalValueLockedToken1,
      derivedHYDRA: v3Pool.token1.derivedETH,
    },
    reserve0: v3Pool.totalValueLockedToken0,
    reserve1: v3Pool.totalValueLockedToken1,
    reserveHYDRA: v3Pool.totalValueLockedETH,
    reserveUSD: v3Pool.totalValueLockedUSD,
    trackedReserveHYDRA: v3Pool.totalValueLockedETH,
    token0Price: v3Pool.token0Price,
    token1Price: v3Pool.token1Price,
    volumeToken0: v3Pool.volumeToken0,
    volumeToken1: v3Pool.volumeToken1,
    volumeUSD: v3Pool.volumeUSD,
    untrackedVolumeUSD: v3Pool.volumeUSDUntracked,
    txCount: v3Pool.txCount,
    createdAtTimestamp: v3Pool.createdAtTimestamp,
    createdAtBlockNumber: v3Pool.createdAtBlockNumber,
    liquidityProviderCount: v3Pool.liquidityProviderCount,
  };
}

// v2Prop: v3Prop
export const pairPoolProps = {
  id: 'id',
  pairAddress: 'id',
  reserve0: 'reserve0',
  reserve1: 'reserve1',
  reserveHYDRA: 'totalValueLockedETH',
  reserveETH: 'totalValueLockedETH',
  reserveUSD: 'totalValueLockedUSD',
  trackedReserveHYDRA: 'totalValueLockedETH',
  trackedReserveETH: 'totalValueLockedETH',
  token0Price: 'token0Price',
  token1Price: 'token1Price',
  volumeToken0: 'volumeToken0',
  volumeToken1: 'volumeToken1',
  volumeUSD: 'volumeUSD',
  untrackedVolumeUSD: 'volumeUSDUntracked',
  txCount: 'txCount',
  createdAtTimestamp: 'createdAtTimestamp',
  createdAtBlockNumber: 'createdAtBlockNumber',
  liquidityProviderCount: 'liquidityProviderCount',
};

export function convertV3TokenToV2(token): Token {
  return {
    id: token.id,
    tokenAddress: token.id,
    symbol: token.symbol,
    name: token.name,
    decimals: token.decimals,
    tradeVolume: token.volume,
    tradeVolumeUSD: token.volumeUSD,
    untrackedVolumeUSD: token.volumeUSDUntracked,
    txCount: token.txCount,
    totalLiquidity: token.totalValueLocked,
    derivedHYDRA: token.derivedETH,
  };
}

// v2Prop: v3Prop
export const tokenProps = {
  id: 'id',
  tokenAddress: 'id',
  symbol: 'symbol',
  name: 'name',
  decimals: 'decimals',
  tradeVolume: 'volume',
  tradeVolumeUSD: 'volumeUSD',
  untrackedVolumeUSD: 'volumeUSDUntracked',
  txCount: 'txCount',
  totalLiquidity: 'totalValueLocked',
  derivedHYDRA: 'derivedETH',
};
