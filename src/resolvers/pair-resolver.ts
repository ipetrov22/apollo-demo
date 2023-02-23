import { PairsArgs } from '../schema/pair';
import { getV2Pairs, getV3Pools } from '../services/pair-service';
import { sortQueryData } from '../utils';

export async function pairs(_, args: PairsArgs) {
  const v2Pairs = await getV2Pairs(args);
  const v3Pools = await getV3Pools(args);

  let pairs = [...v2Pairs, ...v3Pools];

  if (args.orderBy) {
    pairs = sortQueryData(pairs, args.orderBy, args.orderDirection);
  }

  if (args.first) {
    pairs = pairs.slice(0, args.first);
  }

  return pairs;
}
