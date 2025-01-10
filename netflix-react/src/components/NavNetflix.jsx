import { Component } from "react";

class NavNetflix extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg" data-bs-theme="dark">
          <div className="container-fluid d-flex justify-content-between">
            <a className="navbar-brand" style={{ width: "200px" }} href="#">
              <img
                src="public/img/logo.png"
                alt="logoNetflix"
                className="w-50"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarScroll"
              aria-controls="navbarScroll"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul
                className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                style={{ "--bs-scroll-height": "100px" }}
              >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tv Shows
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Movies
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Recently Added
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    My list
                  </a>
                </li>
              </ul>
              <span className="tentMenu d-flex align-items-center">
                <p className="h4 text-white">KIDS</p>
                <i className="bi bi-search"></i>
                <div className="dropdown">
                  <a
                    className="btn btn-secondary dropdown-toggle border border-0 bg-dark"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="public/img/avatar.png"
                      alt="userNetflix"
                      className="userLogo"
                    />
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end mt-3 bg-dark text-white">
                    <p className="text-center">
                      <img
                        src="public/img/avatar.png"
                        alt="userNetflix"
                        className="userLogo"
                      />
                      EPICODER # 1
                    </p>
                    <li>
                      <a
                        className="dropdown-item text-white"
                        href="profile.html"
                      >
                        Manage Profiles
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item text-white"
                        href="profile.html"
                      >
                        Account
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Help Center
                      </a>
                    </li>
                    <br />

                    <li>
                      <a className="dropdown-item text-white" href="#">
                        Singout Netflix
                      </a>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
          </div>
        </nav>
        <div className="container-fluid px-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="mb-4">TV Shows</h2>
              <div className="btn-group" role="group">
                <div className="dropdown ms-4 mt-1">
                  <button
                    type="button"
                    className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Genres
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Comedy
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Drama
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Thriller
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <i className="bi bi-grid icons"></i>
              <i className="bi bi-grid-3x3 icons"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default NavNetflix;
