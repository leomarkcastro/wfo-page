import { ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloClient, InMemoryCache } from '@apollo/experimental-nextjs-app-support';
import axios from 'axios';
import { buildAxiosFetch } from '@lifeomic/axios-fetch';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import { env } from 'next-runtime-env';
import { AUTHSTORE } from '../store/auth';

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = AUTHSTORE.get();
  // return the headers to the context so httpLink can read them
  // console.log('headers', headers);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
const axiosInstance = axios.create({
  baseURL: (env('NEXT_PUBLIC_SERVER_URL') ?? '') + env('NEXT_PUBLIC_GRAPHQL_URL'),
  onUploadProgress: () => { },
});

const fileUploadLink = createUploadLink({
  uri: (env('NEXT_PUBLIC_SERVER_URL') ?? '') + env('NEXT_PUBLIC_GRAPHQL_URL'),

  fetch: (input, init) => {
    return buildAxiosFetch(axiosInstance)(input as RequestInfo, init);
  },
}) as ApolloLink;

export const apolloLinks = ApolloLink.from([authLink, fileUploadLink]);

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: (object) => {
      // via regex check if id is a digit only, if so return false, else return the id
      // @ts-ignore
      const id = (object.id || object._id)?.toString();
      if (id && id.match(/^\d+$/)) {
        return false;
      }
      return id;
    },
  }),
  link: apolloLinks,
  ssrMode: typeof window === 'undefined',
});
