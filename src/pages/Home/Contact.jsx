import React from "react";
import { FaClock, FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section class="container py-5" id="contact">
        <div class="text-center">
          <h2 class="fs-2 fw-semibold">Contact With Us</h2>
          <p class="fw-light pt-3">
            If you have any query. Feel free to contact us.
          </p>
        </div>
        <div class="row pt-5 gy-3">
          <div class="col-md-12 col-lg-6">
            <div class="row gy-4">
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                    <h4 className="fs-3"><FaLocationArrow /></h4>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Address</h5>
                    <p class="card-text small fw-light">
                      A108 Adam Street, <br /> New York, NY 535022
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                  <h4 className="fs-3"><FaPhone /></h4>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Call Us</h5>
                    <p class="card-text small fw-light">
                      +88 01750 00 00 00
                      <br /> +88 01750 00 00 00
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                    <h4 className="fs-3"><FaEnvelope /></h4>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Email Us</h5>
                    <p class="card-text small fw-light">
                      info@gmail.com
                      <br /> info@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card py-4 text-center">
                  <div>
                  <h4 className="fs-3"><FaClock /></h4>
                  </div>
                  <div class="card-body">
                    <h5 class="card-title pt-1 pb-2">Working Hours</h5>
                    <p class="card-text small fw-light">
                      Mon-Fri: 9AM to 5PM <br /> Sunday: 9AM to 1 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6">
            <div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Your Name"
                  aria-label="Example text"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Your Email"
                  aria-label="Example text"
                />
              </div>
              <div class="input-group mb-3">
                <input
                  type="text"
                  class="form-control py-3"
                  placeholder="Subject"
                  aria-label="Example text"
                />
              </div>
              <div class="input-group mb-3">
                <textarea class="form-control" name="" id="" cols="30" rows="6">
                  Message
                </textarea>
              </div>
              <div class="input-group mb-3">
                <button class="btn btn-primary form-control py-2">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
