import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import  Signup  from './pages/Signup';

function App() {
  return (
    <>
    {/* <h1>Here</h1> */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/player" element={<Player />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/movies" element={<MoviePage />} />
        <Route exact path="/new" element={<Player />} />
        <Route exact path="/mylist" element={<UserListedMovies />} />
        <Route exact path="/" element={<Netflix />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
