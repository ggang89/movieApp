import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

export default function Detail() {
  const { movie_id } = useParams();
  // const params = useParams(); //params={movie_id:"53277"}
  //=>구조분해 : const {idd} = params
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  console.log("params", movie_id);

  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/movie_details.json?movie_id=${movie_id}`
        )
      ).json();
      console.log("json", json);
      setMovie(json.data.movie);
      setLoading(false);
    };
    getMovie();
  }, [movie_id]);

  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.large_cover_image} />
          <h1>Title: {movie.title}</h1>
          <br />

          <div>
            <h4>year: {movie.year} </h4>
            <h4>rate: {movie.rating}/10 </h4>
            <h4>runtime: {movie.runtime}min</h4>
          </div>

          <br />
          <div>
            <h3>Description:</h3> {movie.description_full}
          </div>
          <br />
        </div>
      )}
    </div>
  );
}
