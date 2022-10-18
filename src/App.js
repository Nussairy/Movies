import './App.css';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Register from './Components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import Movies from './Components/Movies/Movies';
import TvShows from './Components/TvShows/TvShows';
import TvShowsDetails from './Components/TvShowsDetails/TvShowsDetails';

function App() {
  return <>
    <Routes>
      <Route path='home' element={<Home />} />
      <Route path='register' element={<Register />} />
      <Route path='/' element={<Login />} />
      <Route path='login' element={<Login />} />
      <Route path='moviedetails' element={<MovieDetails />}>
        <Route path=':id' element={<MovieDetails />} />
      </Route>
      <Route path='tvshowsdetails' element={<TvShowsDetails />}>
        <Route path=':id' element={<TvShowsDetails />} />
      </Route>
      <Route path='movies' element={<Movies />} />
      <Route path='tvshows' element={<TvShows />} />
    </Routes>
  </>
}

export default App;
