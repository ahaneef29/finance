import { gql } from '@urql/core';
import client from './client.js';

export const getAuthenticatedUser = () => {
    return client
    .query(gql`
        query {
            me {
                id
                name
                email
            }
        }
    `)
    .toPromise();
}
