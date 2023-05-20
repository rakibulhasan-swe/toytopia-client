import React from "react";
import ironman from "../../assets/gallery/ironman.png";
import ironman1 from "../../assets/gallery/ironman1.png";
import captain from "../../assets/gallery/captain.png";
import optimus from "../../assets/gallery/optimus.png";
import starship from "../../assets/gallery/starship.png";
import hulk from "../../assets/gallery/hulk.png";
import gauntlet from "../../assets/gallery/gauntlet.png";
import bublebee from "../../assets/gallery/bumblebee.png";

const Gallery = () => {
  return (
    <>
      <div className="container py-5">
        <div className="text-center pb-5">
            <h2>Gallery</h2>
            <p>These are the most selled toys</p>
        </div>
        <div className="row g-4 d-flex justify-content-center align-items-center">
          <div className="col-md-6 col-lg-2">
            <img style={{maxHeight: "14rem"}} src={ironman} alt="" />
          </div>
          <div className="col-md-6 col-lg-2">
            <img style={{maxHeight: "14rem"}} src={bublebee} alt="" />
          </div>
          <div className="col-md-6 col-lg-2">
            <img style={{maxHeight: "14rem"}} src={captain} alt="" />
          </div>
          <div className="col-md-6 col-lg-2">
            <img style={{maxHeight: "14rem"}} src={hulk} alt="" />
          </div>
          <div className="col-md-6 col-lg-2">
            <img style={{maxHeight: "14rem"}} src={optimus} alt="" />
          </div>
          <div className="col-md-6 col-lg-2">
            <img style={{maxHeight: "14rem"}} src={gauntlet} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
