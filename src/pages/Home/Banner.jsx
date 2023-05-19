import React from "react";

const Banner = () => {
  return (
    <div>
      <header className="banner d-flex justify-content-center align-items-center text-center">
        <div className="text-white">
          <h2 className="display-1 fw-bold">Pick the best toy</h2>
          <p className="pt-2 pb-4 w-75 mx-auto fw-light">
            we offer premium products, weather you are shopping at one of our
            actual stores or via our websites! You will get the best toys from here.
          </p>
          <div>
            <button
              className="btn btn-primary px-4 py-2 text-white"
              type="submit"
            >
              Get your toys
            </button>
            <button className="btn btn-secondary ms-2 px-4 py-2" type="submit">
              Learn More
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
