import { Spinner, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyTrending = (props) => {
  const [search, setSearch] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notLoaded, setNotLoaded] = useState(false);
  const navigate = useNavigate();
  // state = {
  //   search: [],
  //   loading: true,
  //   notloaded: false,
  // };
  const getTrenFilm = () => {
    fetch(props.query)
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Errore della fetch");
        }
      })
      .then((data) => {
        console.log("I dati sono arrivati correttamente!", data.Search),
          setSearch(data.Search);
        //console.log(this.state.search);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore nel recupero dati", error);
        setNotLoaded(true);
      });
  };
  // componentDidMount() {
  //   this.getTrenFilm();
  // }

  useEffect(() => {
    getTrenFilm();
  }, []);

  return (
    <div className="container-fluid mt-5 ms-1">
      <h2 className="text-white">
        {props.title} &nbsp; &nbsp;
        {loading && <Spinner animation="border" variant="secondary" />}
        {notLoaded && (
          <Alert
            variant="danger"
            className="text-center w-75 me-auto ms-auto"
            style={{
              fontSize: "20px",
            }}
          >
            ⛔ OPS! There are some problems with your connection! Please try
            again. ⛔
          </Alert>
        )}
      </h2>
      <div
        id={props.identity}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <div className="row flex-column flex-md-row flex-nowrap">
              {search.length > 6
                ? search.slice(0, 6).map((movie) => {
                    return (
                      <div key={movie.imdbID} className="col-8 col-md-2 g-1">
                        {" "}
                        <img
                          className="card-img"
                          src={movie.Poster}
                          alt="sherlock"
                          onClick={() => {
                            navigate("/description/" + movie.imdbID);
                          }}
                        />
                      </div>
                    );
                  })
                : search.map((movie) => {
                    return (
                      <div key={movie.imdbID} className="col-8 col-md-2 g-1">
                        {" "}
                        <img
                          className="card-img"
                          src={movie.Poster}
                          alt="sherlock"
                          onClick={() => {
                            navigate("/description/" + movie.imdbID);
                          }}
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <div className="row flex-column flex-md-row flex-nowrap">
              {search.length > 6
                ? search.slice(0, 6).map((movie) => {
                    return (
                      <div key={movie.imdbID} className="col-8 col-md-2 g-1">
                        {" "}
                        <img
                          className="card-img"
                          src={movie.Poster}
                          alt="sherlock"
                          onClick={() => {
                            navigate("/description/" + movie.imdbID);
                          }}
                        />
                      </div>
                    );
                  })
                : search.map((movie) => {
                    return (
                      <div key={movie.imdbID} className="col-8 col-md-2 g-1">
                        {" "}
                        <img
                          className="card-img"
                          src={movie.Poster}
                          alt="sherlock"
                          onClick={() => {
                            navigate("/description/" + movie.imdbID);
                          }}
                        />
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev justify-content-start"
          type="button"
          data-bs-target={"#" + props.identity}
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next justify-content-end"
          type="button"
          data-bs-target={"#" + props.identity}
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MyTrending;
