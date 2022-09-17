import React, { useState, useEffect } from "react";
import { Card} from "react-bootstrap";
import axios from "axios";
// import Movie from "./Movie";

const Rows = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollRight = slider.scrollRight + 500;
  };

  return (
    <>
      <h3 className="text-start">{title}</h3>
        {movies.map((item, id) => {
         <Card style={{ width: '10rem' }}>
         <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
         <h5 className="card-title">{item?.title}</h5>
   </Card>
        })}
    </>
  );
};

export default Rows;

