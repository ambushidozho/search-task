import { useCallback, useState } from 'react';
import './styles.css';
import { useAppDispatch } from '../../hooks/useTypedSelectors';
import { fetchUsers } from '../../store/action-creators/user';
import { debounceTyped } from '../../utils/debounce';
import { SEARCH_URL } from '../../Constants/constants';

export function SearchForm() {
    const [input, setInput] = useState('');
    const dispatch = useAppDispatch();
    const debouncedSearch = useCallback(debounceTyped((url) => {
        dispatch(fetchUsers(url));
    }, 500),
    []
    );

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        debouncedSearch(SEARCH_URL + event.target.value);
        setInput(event.target.value);
    };

    return (
        <div className="searchForm">
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={input}
                    onChange={handleChange}
                />
            </form>
        </div>
    );
}
