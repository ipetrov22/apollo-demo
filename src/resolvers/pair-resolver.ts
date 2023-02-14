import Big from 'big.js';

import { PairsArgs } from '../schema/pair';
import { getV2Pairs, getV3Pools } from '../services/pair-service';

export async function pairs(_, args: PairsArgs) {
  const v2Pairs = await getV2Pairs(args);
  const v3Pools = await getV3Pools(args);

  let pairs = [...v2Pairs, ...v3Pools];

  if (args.orderBy) {
    pairs = pairs.sort((a, b) => {
      const valA = a[args.orderBy];
      const valB = b[args.orderBy];
      let res = 0;

      if (valA instanceof Big) {
        const diff = valA.minus(valB);

        // check if the diff is more or less than 0
        res = diff.eq(0) ? 0 : diff.gt(0) ? 1 : -1;
      } else if (typeof valA === 'string') {
        res = valA.localeCompare(valB);
      }

      if (args.orderDirection === 'desc') {
        res *= -1;
      }

      return res;
    });
  }

  if (args.first) {
    pairs = pairs.slice(0, args.first);
  }

  return pairs;
}

export function pair() {
  return null;
}
