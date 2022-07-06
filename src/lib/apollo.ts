import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4om3vv10elg01xx7jkg6um0/master',
    cache: new InMemoryCache()
});