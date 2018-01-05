import { fetch } from 'node-fetch';
import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

const config = {
  link: new HttpLink({
    uri: 'http://localhost:8080/graphql',
    fetch: fetch,
    opts: {
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    },
  })
};

export default withData(config);