import request from 'graphql-request';

import { v2TokensQuery, v3TokensQuery } from '../queries/token';
import { Token, TokenArgs } from '../schema/token';
import { getEnvVariable } from '../utils/getEnvVariable';
import { convertV3TokenToV2, tokenProps } from '../utils/parsing';

export async function getV2Tokens(args: TokenArgs): Promise<Token[]> {
  const url = getEnvVariable('V2_GRAPH_ENDPOINT');
  const data = await request(url, v2TokensQuery, args);
  return data.tokens ? data.tokens : [];
}

export async function getV3Tokens(args: TokenArgs): Promise<Token[]> {
  if (args.orderBy) {
    args.orderBy = tokenProps[args.orderBy] ?? args.orderBy;
  }

  const url = getEnvVariable('V3_GRAPH_ENDPOINT');
  const data = await request(url, v3TokensQuery, args);

  if (data.tokens) {
    return data.tokens.map(convertV3TokenToV2);
  }

  return [];
}
