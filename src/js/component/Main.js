import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../../Requests";


const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log("this is a flag", movie);
  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="card text-bg-dark text-start">
      <img
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <div className="card-img-overlay">
        <h5 className="card-title">{movie?.title}</h5>
       
        <div className="d-grid gap-2 d-md-block">
          <button className="btn btn-outline-success rounded-pill me-2" type="button">
            Play
          </button>
          <button className="btn btn-outline-danger rounded-pill me-2" type="button">
            Wacth Trailer
          </button>
        </div>
        <p className="card-text">Release:{movie?.release_date}</p>
        <p className="card-text">{truncateString(movie?.overview, 50)}</p>
      </div>
    </div>
  );
};

export default Main;

{
  /* <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      alt={movie?.title}
    />
  </Carousel.Item>
  <Carousel.Caption>
    <h3>{movie?.title}</h3>
    <p>Release:{movie?.release_date}</p>
    <p>{truncateString(movie?.overview, 50)}</p>
  </Carousel.Caption>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      alt={movie?.title}
    />
  </Carousel.Item>
  <Carousel.Caption>
    <h3>{movie?.title}</h3>
    <p>Release:{movie?.release_date}</p>
    <p>{truncateString(movie?.overview, 50)}</p>
  </Carousel.Caption>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
      alt={movie?.title}
    />

    <Carousel.Caption>
      <h3>{movie?.title}</h3>
      <p>Release:{movie?.release_date}</p>
      <p>{truncateString(movie?.overview, 50)}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>; */
}
