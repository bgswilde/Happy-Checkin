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
    mutation($phoneNumber: String!, $firstName: String!, $lastName: String!, $password: String!) {
        addUser(phoneNumber: $phoneNumber, firstName: $firstName, lastName: $lastName, password: $password) {
            token
            user {
                phoneNumber
                firstName
                lastName
            }
        }
    }
`

export const REMOVE_USER = gql`
    mutation($userId: ID!) {
        removeUser(userId: $userId){
            phoneNumber
        }
    }
`

export const UPDATE_USER = gql`
    mutation($firstName: String, $phoneNumber: String, $lastName: String) {
        updateUser(firstName: $firstName, phoneNumber: $phoneNumber, lastName: $lastName) {
            firstName
            phoneNumber
            lastName
        }
    }
`

export const ADD_JOB = gql`
    mutation($userId: String!, $checkIn: String!, $confirmationKey: String!, $name: String!, $street1: String!, $city: String!, $state: String!, $zip: Int!, $title: String!, $imageUrl: String!, $cost: Int!) {
        addJob(userId: $userId, checkIn: $checkIn, confirmationKey: $confirmationKey, name: $name, street1: $street1, city: $city, state: $state, zip: $zip, title: $title, imageUrl: $imageUrl, cost: $cost) {
            createdAt
            checkIn
            package{
                cost
                imageUrl
                title
                description
            }
            hotel {
                _id
                street1
                street2
                city
                state
                zip
            }
            customer {
                _id
                displayName
            }
        }
    }
`

export const UPDATE_JOB = gql`
    mutation($jobId: ID!, $checkIn: String, $claimedAt: String, $completedAt: String, $confirmationKey: String, $instructions: String, $name: String, $street1: String, $street2: String, $city: String, $state: String, $zip: String, $title: String, $imageUrl: String, $cost: Int) {
        updateJob(jobId: $jobId, checkIn: $checkIn, confirmationKey: $confirmationKey, name: $name, street1: $street1, street2: $street2, city: $city, state: $state, zip: $zip, title: $title, imageUrl: $imageUrl, cost: $cost) {
            checkIn
            claimedAt
            completedAt
            confirmationKey

        }
    }
`

export const REMOVE_JOB = gql`
    mutation($jobId: ID!) {
        removeJob(jobId: $jobId) {
            _id
        }
    }
`

