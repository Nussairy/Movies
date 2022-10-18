import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function TvShowsDetails() {

    let { id } = useParams();

    const [TvShowsDetails, setTvShowsDetails] = useState([]);

    const [genres, setGenres] = useState([]);

    useEffect(() => {

        async function getTvShowsDetails() {
            let { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=c5b0900679a368108998cadec9a4f607&language=en-US`);
            console.log(data);
            setTvShowsDetails(data);
            setGenres(data.genres);
        };
        getTvShowsDetails();

    }, [])

    return <>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <span className="navbar-brand text-light">Noxe</span>
                <Link className="text-light text-decoration-none mx-2 text-muted" to={'/home'}>Home</Link>
                <Link className="text-light text-decoration-none mx-2 text-muted" to={'/movies'}>Movies</Link>
                <Link className="text-light text-decoration-none mx-2 text-muted" to={'/tvshows'}>TvShows</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex ms-auto" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <div className='mx-3'>
                        <i className="fa-brands fa-facebook text-light mx-1"></i>
                        <i className="fa-brands fa-instagram text-light mx-1"></i>
                        <i className="fa-brands fa-spotify text-light mx-1"></i>
                        <i className="fa-brands fa-youtube text-light mx-1"></i>
                    </div>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to={"/login"}>Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to={"/register"}>Register</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="container">

            <div className="row p-5">

                <div className="col-md-4">
                    <div>
                        <img src={`https://image.tmdb.org/t/p/original/${TvShowsDetails.poster_path}`} alt="movie poster" className='w-100' />
                    </div>
                </div>

                <div className="col-md-8">
                    <div className='text-light'>
                        <h2>{TvShowsDetails.original_title}</h2>
                        <h4 className='text-muted'>{TvShowsDetails.tagline}</h4>
                        <div className='d-flex my-3'>
                            {genres.map(gener => <p key={gener.id} className='bg-info text-light me-2 p-1 rounded-3'>{gener.name}</p>)}
                        </div>
                        <h5 className='my-4'>Vote : {TvShowsDetails.vote_average}</h5>
                        <h5 className='my-4'>vote count : {TvShowsDetails.vote_count}</h5>
                        <h5 className='my-4'>Popularity : {TvShowsDetails.popularity}</h5>
                        <h5 className='my-4'>release date : {TvShowsDetails.release_date}</h5>
                        <h4 className='text-muted'>{TvShowsDetails.overview}</h4>
                    </div>
                </div>

            </div>

        </div>
    </>
}
