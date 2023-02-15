import { TokenArgs } from '../schema/token';
import { getV2Tokens, getV3Tokens } from '../services/token-service';
import { sortQueryData } from '../utils';

export async function tokens(_, args: TokenArgs) {
  const v2Tokens = await getV2Tokens(args);
  const v3Tokens = await getV3Tokens(args);

  let tokens = [...v2Tokens, ...v3Tokens];

  if (args.orderBy) {
    tokens = sortQueryData(tokens, args.orderBy, args.orderDirection);
  }

  if (args.first) {
    tokens = tokens.slice(0, args.first);
  }

  return tokens;
}

export function token() {
  return null;
}
