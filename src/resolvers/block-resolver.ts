import { BlocksArgs } from '../schema/block';
import { getBlocks } from '../services/block-service';

export async function blocks(_, args: BlocksArgs) {
  const blocks = await getBlocks(args);
  return blocks;
}
