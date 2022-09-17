import React from "react";
import SavedMovies from "./SavedMovies";

const Account = () => {
  return (
    <>
      <div className="card text-bg-dark">
        <img
          className="max-width-100% img-fluid"
          src="https://allhdwallpapers.com/wp-content/uploads/2015/04/ted-2.png"
        />
        <div className="card-img-overlay">
          <div className="card-text">
            <h3>My Movies</h3>
          </div>
        </div>
      </div>
      {/* <SavedMovies /> */}
    </>
  );
};

export default Account;
