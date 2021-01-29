import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};


export type Friend = {
  __typename?: 'Friend';
  _id: Scalars['String'];
  index: Scalars['Int'];
  picture: Scalars['String'];
  age: Scalars['Int'];
  eyeColor: Scalars['String'];
  name: Scalars['String'];
  company: Scalars['String'];
  email: Scalars['String'];
  phone: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  list: Array<User>;
  find: User;
};


export type QueryListArgs = {
  name?: Maybe<Scalars['String']>;
};


export type QueryFindArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  email: Scalars['String'];
  index: Scalars['Int'];
  picture: Scalars['String'];
  age: Scalars['Int'];
  eyeColor: Scalars['String'];
  name: Scalars['String'];
  company: Scalars['String'];
  phone: Scalars['String'];
  greeting: Scalars['String'];
  friends: Array<Friend>;
};


export type UserFriendsArgs = {
  name?: Maybe<Scalars['String']>;
};

export type UsersListQueryVariables = Exact<{
  search?: Maybe<Scalars['String']>;
}>;


export type UsersListQuery = (
  { __typename?: 'Query' }
  & { list: Array<(
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'age' | 'eyeColor' | 'company' | 'email' | 'picture'>
  )> }
);

export type UserDetailsQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type UserDetailsQuery = (
  { __typename?: 'Query' }
  & { find: (
    { __typename?: 'User' }
    & Pick<User, '_id' | 'name' | 'age' | 'email' | 'picture'>
    & { friends: Array<(
      { __typename?: 'Friend' }
      & Pick<Friend, 'picture' | 'name' | 'age' | 'eyeColor' | 'company' | 'email'>
    )> }
  ) }
);


export const UsersListDocument = gql`
    query UsersList($search: String) {
  list(name: $search) {
    _id
    name
    age
    eyeColor
    company
    email
    picture
  }
}
    `;

/**
 * __useUsersListQuery__
 *
 * To run a query within a React component, call `useUsersListQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersListQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useUsersListQuery(baseOptions?: Apollo.QueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
        return Apollo.useQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, baseOptions);
      }
export function useUsersListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersListQuery, UsersListQueryVariables>) {
          return Apollo.useLazyQuery<UsersListQuery, UsersListQueryVariables>(UsersListDocument, baseOptions);
        }
export type UsersListQueryHookResult = ReturnType<typeof useUsersListQuery>;
export type UsersListLazyQueryHookResult = ReturnType<typeof useUsersListLazyQuery>;
export type UsersListQueryResult = Apollo.QueryResult<UsersListQuery, UsersListQueryVariables>;
export const UserDetailsDocument = gql`
    query UserDetails($id: String!) {
  find(id: $id) {
    _id
    name
    age
    email
    picture
    friends {
      picture
      name
      age
      eyeColor
      company
      email
    }
  }
}
    `;

/**
 * __useUserDetailsQuery__
 *
 * To run a query within a React component, call `useUserDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserDetailsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserDetailsQuery(baseOptions: Apollo.QueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
        return Apollo.useQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, baseOptions);
      }
export function useUserDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserDetailsQuery, UserDetailsQueryVariables>) {
          return Apollo.useLazyQuery<UserDetailsQuery, UserDetailsQueryVariables>(UserDetailsDocument, baseOptions);
        }
export type UserDetailsQueryHookResult = ReturnType<typeof useUserDetailsQuery>;
export type UserDetailsLazyQueryHookResult = ReturnType<typeof useUserDetailsLazyQuery>;
export type UserDetailsQueryResult = Apollo.QueryResult<UserDetailsQuery, UserDetailsQueryVariables>;