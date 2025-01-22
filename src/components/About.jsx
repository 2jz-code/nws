import React from "react";
import Placeholder from "../assets/placeholder.jpg";

const cardData = [
  {
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    image: Placeholder,
  },
  {
    title: "Top AI trends in 2022",
    description:
      "Discover the leading artificial intelligence trends reshaping industries in 2022.",
    image: Placeholder,
  },
  {
    title: "Cloud computing advancements",
    description:
      "Explore the advancements in cloud computing that are revolutionizing IT infrastructure.",
    image: Placeholder,
  },
];

const About = () => {
  return (
    <div className="flex flex-col items-center space-y-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a
            href="#"
            className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={card.image}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {card.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default About;
