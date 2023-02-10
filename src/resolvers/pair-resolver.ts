import request from 'graphql-request';

import { pairsQuery } from '../queries/pair';
import { PairsArgs } from '../schema/pair';
import { getEnvVariable } from '../utils/getEnvVariable';

export function pairs(_, args: PairsArgs) {
  const url = getEnvVariable('V2_GRAPH_ENDPOINT');
  request(url, pairsQuery).then(console.log).catch(console.log);
  const pairs = [];
  return pairs;
}

export function pair() {
  return null;
}
