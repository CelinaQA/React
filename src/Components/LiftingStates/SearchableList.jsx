'use strict';

import { useState } from 'react';
import List from './List';
import Searchbar from './Searchbar';
import Todo from './Todo.json'

const SearchableList = () => {

    const [query, setQuery] = useState('');
    const [check, setCheck] = useState(false);

    const handleQuery = (e) => {
        setQuery(e.target.value);
    }
    const handleCheck = (e) => {
        setCheck(c => !c);
    }

    return (
        <>
            <Searchbar
                stateQuery={query}
                updateQuery={handleQuery}
                stateCheck={check}
                updateCheck={handleCheck}
            />
            <List
                list={Todo}
                query={query}
                check={check}
            />
        </>
    )
}

export default SearchableList;