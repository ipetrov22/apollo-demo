import { TokenArgs } from '../schema/token';
import { getV2Tokens, getV3Tokens } from '../services/token-service';

export async function tokens(_, args: TokenArgs) {
  const v2Tokens = await getV2Tokens(args);
  const v3Tokens = await getV3Tokens(args);

  return [...v2Tokens, ...v3Tokens];
}

export function token() {
  return null;
}
