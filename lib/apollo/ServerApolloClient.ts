// import { registerApolloClient } from "@apollo/experimental-nextjs-app-support";
// import { apolloClient } from "./ApolloClient";

// export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
//   return apolloClient;
// });

import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { env } from 'next-runtime-env';
// import fetch from 'isomorphic-unfetch';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined', // Disables force-fetching on the server (so queries are only run once)
    link: new HttpLink({
      uri: env('NEXT_PUBLIC_SERVER_URL'), // Your GraphQL API endpoint
      fetch,
    }),
    cache: new InMemoryCache({
      dataIdFromObject: (object) => {
        // via regex check if id is a digit only, if so return false, else return the id
        const id = (object.id || object._id)?.toString();
        if (id && id.match(/^\d+$/)) {
          return false;
        }
        return id;
      },
    }),
  });
};

export default createApolloClient;
