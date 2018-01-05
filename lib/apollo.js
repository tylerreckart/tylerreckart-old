import ApolloClient, {createNetworkInterface} from 'apollo-client';
import fetch from 'node-fetch';

export default new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:8080/graphql',
    fetch: fetch,
    opts: {
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    },
  })
});