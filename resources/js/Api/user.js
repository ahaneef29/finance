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

export const updateName = ({id, name, email, password, confirmPassword}) => {
    return client
        .mutation(gql`
            mutation {
                updateName(id: ${id} name: """${name}""") {
                    id
                    name
                }
            }
        `)
    .toPromise();
}

export const updateUserPassword = ({id, name, email, password, confirmPassword}) => {
    return client
        .mutation(gql`
            mutation {
                updatePassword(id: ${id} password: """${password}""") {
                    id
                    password
                }
            }
        `)
    .toPromise();
}