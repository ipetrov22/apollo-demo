import request from 'graphql-request';

import { blocksQuery } from '../queries/block';
import { Block, BlocksArgs } from '../schema/block';
import { getEnvVariable } from '../utils/getEnvVariable';

export async function getBlocks(args: BlocksArgs): Promise<Block[]> {
  const url = getEnvVariable('V2_GRAPH_ENDPOINT');
  const data = await request(url, blocksQuery, args);
  return data.blocks ? data.blocks : [];
}
