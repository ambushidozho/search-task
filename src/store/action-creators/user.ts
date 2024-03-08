import { Dispatch } from 'redux';
import { UserAction, UserActionTypes } from '../../types/user';

export const fetchUsers = (url: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({
                type: UserActionTypes.FETCH_USERS,
            });
            console.log(url);
            const response = await fetch(url);
            const data = await response.json();
            console.log(data.users);
            dispatch({
                type: UserActionTypes.FETCH_USERS_SUCCESS,
                payload: data.users,
            });
        } catch (e) {
            dispatch({
                type: UserActionTypes.FETCH_USERS_ERROR,
                payload: 'Произошла ошибка при загрузке данных',
            });
        }
    };
};
