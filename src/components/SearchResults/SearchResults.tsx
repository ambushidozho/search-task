import { useEffect } from 'react';
import { UserCard } from '../UserCard/UserCard';
import { useAppDispatch, useAppSelector } from '../../hooks/useTypedSelectors';
import './style.css';
import { fetchUsers } from '../../store/action-creators/user';
import { URL } from '../../Constants/constants';

export function SearchResults() {
    const { users, loading, error } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchUsers(URL));
    }, []);

    if (loading) {
        return <h1 className="big-text">Loading...</h1>;
    }

    if (error) {
        return <h1 className="big-text">{error}</h1>;
    }
    return (
        <div className="usersList">
            {users.map((user) => (
                <UserCard {...user} />
            ))}
        </div>
    );
}
