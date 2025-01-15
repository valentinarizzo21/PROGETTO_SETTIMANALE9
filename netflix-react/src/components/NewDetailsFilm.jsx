import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DetailsOfMovie = () => {
  const param = useParams();
  const [film, setFilm] = useState({});
  const URL = `http://www.omdbapi.com/?apikey=88599aa0&i=${param.filmID}`;
  const getTrenFilm = () => {
    fetch(URL)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore della fetch");
        }
      })
      .then((data) => {
        console.log("I dati sono arrivati correttamente!", data), setFilm(data);
        // console.log(this.state.search);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel recupero dati", error);
        setNotLoaded(true);
      });
  };

  useEffect(() => {
    getTrenFilm();
  }, []);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={film.Poster} />
        <Card.Body>
          <Card.Title>{film.Title}</Card.Title>
          <Card.Text className="text-white">{film.Plot}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default DetailsOfMovie;
