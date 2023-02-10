import request from 'graphql-request';
import { pairsQuery } from '../queries/pair';
import { PairsArgs } from '../schema/pair';
import { getEnvVariable } from '../utils/getEnvVariable';

export async function getV2Pairs(args: PairsArgs) {
  const url = getEnvVariable('V2_GRAPH_ENDPOINT');
  const data = await request(url, pairsQuery, args);
  return data.pairs ? data.pairs : [];
}

export function getV3Pools() {
  return [];
}
