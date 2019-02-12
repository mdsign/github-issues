import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
})

const authLink = setContext((_, { headers }) => {
    const token = '41a305e890c7afcd6e7b9c5cdcb9df1b2d8d2df2';
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
})

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
})
