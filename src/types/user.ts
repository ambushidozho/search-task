export type User = {
    firstName: string;
    lastName: string;
    image: string;
    address: {
        city: string;
    };
};

export interface UserState {
    users: User[];
    loading: boolean;
    error: null | string;
}

export enum UserActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR',
}

interface FetchUsersAction {
    type: typeof UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccessAction {
    type: typeof UserActionTypes.FETCH_USERS_SUCCESS;
    payload: User[];
}

interface FetchUsersErrorAction {
    type: typeof UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export type UserAction =
    | FetchUsersAction
    | FetchUsersSuccessAction
    | FetchUsersErrorAction;
