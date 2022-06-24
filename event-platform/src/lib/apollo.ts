import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient ({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qdoejx3y5z01xla2yk0fh6/master',
  cache: new InMemoryCache()
})

