import { gql } from 'graphql-tag';

export const blocksQuery = gql`
  query Blocks($where: ListBlockInput, $orderDirection: String, $orderBy: String, $first: Float) {
    blocks(where: $where, orderDirection: $orderDirection, orderBy: $orderBy, first: $first) {
      id
      hash
      height
      timestamp
      timestamp_from
      timestamp_to
      number
    }
  }
`;
