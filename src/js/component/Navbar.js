import React from "react";
import { Link, useHistory } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

export const Navbar = () => {
  const { user, logOut } = UserAuth;
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await logOut();
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img
            alt=""
            src="https://pluspng.com/img-png/movie-png-hd-movie-logo-cliparts-2524910-1118.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </a>
        {user?.email ? (
          <div className="col-md-3 text-end">
            <Link to="/Account">
              <button type="button" className="btn btn-outline-primary me-2">
                Account
              </button>
            </Link>

            <button
              onClick={handleLogout}
              type="button"
              className="btn btn-primary"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="col-md-3 text-end">
            <Link to="/login">
              <button type="button" className="btn btn-outline-primary me-2">
                Login
              </button>
            </Link>
            <Link to="/Signup">
              <button type="button" className="btn btn-primary">
                Sign-up
              </button>
            </Link>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;

<div className="container">
  <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
    <a
      href="/"
      className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
    >
      <img
        alt=""
        src="https://pluspng.com/img-png/movie-png-hd-movie-logo-cliparts-2524910-1118.png"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />
    </a>
    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2">
        Login
      </button>
      <button type="button" className="btn btn-primary">
        Sign-up
      </button>
    </div>

    <div className="col-md-3 text-end">
      <button type="button" className="btn btn-outline-primary me-2">
        Login
      </button>
      <button type="button" className="btn btn-primary">
        Sign-up
      </button>
    </div>
  </header>
</div>;
