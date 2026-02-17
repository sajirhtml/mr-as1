import React from "react";

const Hero = () => {
  return (
    <>
      <div
        className="hero min-h-screen bg-cover bg-center "
        style={{
          backgroundImage:
            "url(https://i.postimg.cc/v8WbKhJS/banner-image.png)",
        }}
      >
        <div className="hero-overlay bg-linear-to-r from-slate-700 to-75%"></div>
        <div className=" w-full p-5 md:p-20">
          <div className="w-full text-neutral-content">
            <div className="max-w-md flex flex-col items-start text-left">
              <h1 className="mb-5 text-5xl font-bold">Best Collection For You</h1>
              <p className="mb-5">
                Discover the latest trends in fashion, electronics, and more. Shop
                with confidence and style at SwiftCart.
              </p>
              <button className="btn btn-primary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
