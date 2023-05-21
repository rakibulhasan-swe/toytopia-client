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
                Access tokens are used in token-based authentication to allow an
                application to access an API. The refresh token just helps you
                to re-authenticate the user without them having to re-enter
                their credentials again and again. The JWT must be stored in a
                safe place in the user's browser. If you store it in
                localStorage, it can be accessed by any script on your web page.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>Compare SQL and NoSQL databases?</h4>
              <p className="fw-light lh-lg py-3">
                SQL and NoSQL differ in that they are relational (SQL) or
                non-relational (NoSQL), whether their schemas are predefined or
                dynamic, their scale, the type of data they include, and whether
                they are appropriate. more suitable for multi-line or
                unstructured transactions.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>What is express js? What is Nest JS?</h4>
              <p className="fw-light lh-lg py-3">
                Express, is a back end web application framework for building
                RESTful APIs with Node.js. Nest. JS is a framework that helps
                build Node. JS server-side applications. The Nest framework is
                built using TypeScript which allows developers to build highly
                scalable and testable applications.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <h4>What is MongoDB aggregate and how does it work?</h4>
              <p className="fw-light lh-lg py-3">
                Aggregation is a way of processing a large number of documents
                in a collection by passing them through different stages. The
                stages make up what's called a pipeline. Stages in the process
                can filter, sort, group, reshape, and modify the documents that
                go through the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
