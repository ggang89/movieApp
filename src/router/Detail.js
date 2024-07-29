import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { idd } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${idd}`)
    ).json();
    console.log("json", json);
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

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
