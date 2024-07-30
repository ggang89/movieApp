import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Movie from "../Movie";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //노마드 수업
  // const getMovies = async () => {
  //   const json = await (
  //     await fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //     )
  //   ).json();
  //   setLoading(false);
  //   setMovies(json.data.movies);
  // };

  //기본 fetch 호출법
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setLoading(false);
    setMovies(json.data.movies);
    console.log(json);
  };

  useEffect(() => {
    getMovies(); //모든 렌더링 후에 실행되는 코드
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/movie/:idd">Detail : Movie Description</NavLink>
            </li>
          </ul>
          <h1>Movie List</h1>

          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              img={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </>
      )}
    </>
  );
}
