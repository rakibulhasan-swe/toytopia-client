import React from "react";
import Head from "../../Components/Head";

const Blog = () => {
  return (
    <>
    <Head title={"Blogs"} />
      <div className="container pt-5">
        <div className="row g-4">
          <div className="col-md-6">
            <div>
              <h4>
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h4>
              <p className="fw-light lh-lg py-3">
                
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>Compare SQL and NoSQL databases?</h4>
              <p className="fw-light lh-lg py-3">
                
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>What is express js? What is Nest JS (google it)?</h4>
              <p className="fw-light lh-lg py-3">
                
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>
              What is MongoDB aggregate and how does it work (google it)?
              </h4>
              <p className="fw-light lh-lg py-3">
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
