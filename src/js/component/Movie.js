import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { UserAuth } from "../../Context/AuthContext";
import { db } from "../../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Movie = ({ item }) => {
  const [like, setLikes] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  const savedMovie = async () => {
    if (user?.email) {
      setLikes(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedMovies: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Please log in to saved a movie");
    }
  };

  return (
    <div className="d-block w-100">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
            alt={item?.title}
          />
        </Carousel.Item>
        <Carousel.Caption>
          <h3>{item?.title}</h3>
        </Carousel.Caption>
        <p onClick={savedMovie}>
          {like ? (
            <FaHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </Carousel>
    </div>
  );
};

export default Movie;
