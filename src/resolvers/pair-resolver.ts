import { PairsArgs } from '../schema/pair';
import { getV2Pairs, getV3Pools } from '../services/pair-service';

export async function pairs(_, args: PairsArgs) {
  const v2Pairs = await getV2Pairs(args);
  const v3Pools = await getV3Pools(args);

  const pairs = [...v2Pairs, ...v3Pools];
  return pairs;
}

export function pair() {
  return null;
}
