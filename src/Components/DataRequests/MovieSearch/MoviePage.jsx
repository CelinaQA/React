'use strict';

import { useState } from 'react';
import axios from 'axios';
import { Spinner } from 'reactstrap';
import Result from './Result';

const MoviePage = () => {

    const [query, setQuery] = useState("");

    const [result, setResult] = useState([]);
    const [error, setError] = useState(null);

    const handleChange = ({ target }) => {
        setQuery(target.value);
    }

    const searchMovie = (e) => {
        e.preventDefault();
        axios.get(`http://www.omdbapi.com/?apikey=d51705a&s=${query}`)
            .then((response) => {
                console.log(response);
                setResult(response.data.Search);
                console.log(result);
            })
            .catch((error) => {
                setError(error);
            });

    }

    return (
        <>
            <form onSubmit={searchMovie}>
                <input placeholder="Search movie title" type="text" onChange={handleChange} value={query} />
                <button type="submit" >Search</button>
            </form>
            <hr />
            <Result result={result} error={error} />
        </>

    )



}

export default MoviePage;