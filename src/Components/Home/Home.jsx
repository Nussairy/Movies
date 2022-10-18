import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
export default function Home() {

    const [tvShows, setTvShows] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        async function tvAPI() {
            let { data } = await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=c5b0900679a368108998cadec9a4f607");
            setTvShows(data.results);
        }
        tvAPI();

        async function movieAPI() {
            let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/week?api_key=c5b0900679a368108998cadec9a4f607');
            setMovies(data.results);
        }
        movieAPI();
    }, []);

    return <>

        {movies && tvShows ? <>

            <div>
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

                <div className='container mt-5'>
                    <div className="row text-light">
                        <div className="col-md-4">
                            <div className='border-top border-bottom p-5'>
                                <h2>Trending movies to watch now</h2>
                                <p>Most watched movies this week</p>
                            </div>
                        </div>

                        {movies.map((movie, idx) => <div key={idx} className='col-md-2'>

                            <Link className='text-decoration-none text-light' to={`/moviedetails/${movie.id}`}>
                                <div>
                                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="movie poster" className='w-100' />
                                    <h5>{movie.title}</h5>
                                </div>
                            </Link>

                        </div>)}

                    </div>
                </div>

                <div className='container mt-5'>
                    <div className="row text-light">
                        <div className="col-md-4">
                            <div className='border-top border-bottom p-5'>
                                <h2>Trending TV Shows to watch now</h2>
                                <p>Most watched TV Shows this week</p>
                            </div>
                        </div>

                        {tvShows.map((show, idx) => <div key={idx} className='col-md-2'>

                            <div>
                                <img src={`https://image.tmdb.org/t/p/original/${show.poster_path}`} alt="movie poster" className='w-100' />
                                <h5>{show.name}</h5>
                            </div>

                        </div>)}

                    </div>
                </div>

            </div>

        </> : <>

            <div className='vh-100 d-flex justify-content-center align-items-center'>
                <i className='fa-solid fa-spinner fa-spin fa-5x text-white'></i>
            </div>

        </>}




    </>
}
