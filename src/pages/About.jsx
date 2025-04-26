import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          We are passionate explorers committed to helping you discover the beauty and diversity of the world. Our team blends expertise, creativity, and personalized service to design unforgettable travel experiences. From planning dream vacations to curating unique adventures, we believe every journey should be inspiring and seamless. With a deep love for cultures, landscapes, and stories, we bring destinations to life and create memories that last forever. Trust us to guide your travels with care, excitement, and a true spirit of adventure. Every trip we craft is a step toward new discoveries and lifelong connections.
          </p>
          <br />
          <p>
          We believe that travel transforms lives, opens minds, and unites people. With dedication and passion, we are here to make your journeys meaningful, memorable, and truly extraordinary.
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
