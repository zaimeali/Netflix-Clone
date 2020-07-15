import React, { useEffect, useState } from 'react'

// API Axios
import axios from './axios';

// For Images
const base_url = 'https://image.tmdb.org/t/p/original/';


export default function Row({ title, fetchUrl }) {
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(
                request.data.results
            );
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // fetchUrl in [] this bcz it is a dependency


    console.log(movies);

    return (
        <div className="row">
            <h2>{ title }</h2>

            <div className="row_posters">
                {
                    movies.map(movie => {
                        return(
                            <img 
                                className="row_poster"
                                src={ `${base_url}${movie.poster_path}` } 
                                alt={ movie.name }     
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}
