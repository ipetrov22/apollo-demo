// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "BigGQL" scalar type to represent currency values
  scalar BigGQL

  type Pair {
    id: String!
    pairAddress: String
    token0: Token!
    token1: Token!
    reserve0: BigGQL!
    reserve1: BigGQL!
    totalSupply: BigGQL!
    reserveHYDRA: BigGQL!
    reserveUSD: BigGQL!
    trackedReserveHYDRA: BigGQL!
    token0Price: BigGQL!
    token1Price: BigGQL!
    volumeToken0: BigGQL!
    volumeToken1: BigGQL!
    volumeUSD: BigGQL!
    untrackedVolumeUSD: BigGQL!
    txCount: Int!
    createdAtTimestamp: Int!
    createdAtBlockNumber: Int!
    liquidityProviderCount: Int!
    _oneDayVolumeUSD: BigGQL!
    _oneWeekVolumeUSD: BigGQL!
  }

  type Token {
    id: String!
    tokenAddress: String!
    symbol: String!
    name: String!
    decimals: Int!
    totalSupply: Int!
    tradeVolume: BigGQL!
    tradeVolumeUSD: BigGQL!
    untrackedVolumeUSD: BigGQL!
    txCount: Int!
    totalLiquidity: BigGQL!
    derivedHYDRA: BigGQL!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;

export default typeDefs;
