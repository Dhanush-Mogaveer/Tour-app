import React from "react";
import PlaceCard from "./PlaceCard";
import Img1 from "../../assets/places/boat.jpg";
import Img2 from "../../assets/places/tajmahal.jpg";
import Img3 from "../../assets/places/water.jpg";
import Img4 from "../../assets/places/place4.jpg";
import Img5 from "../../assets/places/place5.jpg";
import Img6 from "../../assets/places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Chicago",
    location: "USA",
    description: "A vibrant city known for its stunning skyline, deep-dish pizza, and rich cultural scene.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "An iconic marble monument of love and beauty in Agra, India.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Veligandu Island",
    location: "Maldives",
    description:
      "A tropical paradise in the Maldives, famous for its crystal-clear waters and serene beaches.",
    price: 6200,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Opera House",
    location: "Sydney",
    description: "An architectural masterpiece in Sydney, known for its iconic sail-like design and world-class performances.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Los Angeles",
    location: "California",
    description:
      "The city of stars, blending entertainment, beaches, and vibrant culture.",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Las Vegas",
    location: "Nevada",
    description:
      "The ultimate city of lights, entertainment, and unforgettable nightlife.",
    price: 6200,
    type: "Cultural Relax",
  },
];

const Places = ({ handleOrderPopup }) => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white bg-gray-50 py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Best Places to Visit
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PlacesData.map((item, index) => (
              <PlaceCard
                handleOrderPopup={handleOrderPopup}
                key={index}
                {...item}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
