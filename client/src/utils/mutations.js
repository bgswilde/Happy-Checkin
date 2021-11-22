import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation($phoneNumber: String!, $password: String!) {
        login(phoneNumber: $phoneNumber, password: $password) {
            token
            user {
                _id
                phoneNumber
                displayName
            }
        }
    }
`

export const ADD_USER = gql`
    mutation($role: Int!, $phoneNumber: String!, $firstName: String!, $lastName: String!, $password: String!) {
        addUser(role: $role, phoneNumber: $phoneNumber, firstName: $firstName, lastName: $lastName, password: $password) {
            token
            user {
                phoneNumber
                firstName
                lastName
            }
        }
    }
`