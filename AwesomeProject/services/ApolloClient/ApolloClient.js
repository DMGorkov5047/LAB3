import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const ApolloClient = new ApolloClient({
    uri: 'https://xn--80aak7ahkw3ae9h8a.xn--p1ai/api',
    cache: new InMemoryCache(),
});
