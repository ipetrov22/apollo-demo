import { PairsArgs } from '../schema/pair';
import { getV2Pairs } from '../services/pair-service';

export async function pairs(_, args: PairsArgs) {
  const v2Pairs = await getV2Pairs(args);

  const pairs = [...v2Pairs];
  return pairs;
}

export function pair() {
  return null;
}
