import request from 'graphql-request';

import { pairsQuery } from '../queries/pair';
import { poolsQuery } from '../queries/pool';
import { PairsArgs } from '../schema/pair';
import { getEnvVariable } from '../utils/getEnvVariable';

export async function getV2Pairs(args: PairsArgs) {
  const url = getEnvVariable('V2_GRAPH_ENDPOINT');
  const data = await request(url, pairsQuery, args);
  return data.pairs ? data.pairs : [];
}

export async function getV3Pools(args: PairsArgs) {
  const url = getEnvVariable('V3_GRAPH_ENDPOINT');
  const data = await request(url, poolsQuery, args);
  return data.pools ? data.pools : [];
}
