import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

function Slider({ title, data, idx, githubLink, describtion, liveSiteLink }) {
  const obj = useState(data);
  const items = obj[0];
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => (oldIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((oldIndex) => (oldIndex - 1 + items.length) % items.length);
  };

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => (oldIndex + 1) % items.length);
    }, 2000);
    return () => clearInterval(slider);
  }, [index, items.length]);

  return (
    <section className="project w-full h-min py-5 md:p-0 bg-dark">
      <div className="w-full px-10 text-center h-min max-w-5xl mx-auto flex flex-col gap-5 justify-evenly items-center md:flex-row md:text-start md:h-[30rem]">
        {idx % 2 === 0 ? (
          <>
            <div className="w-full h-[20rem] flex-1 flex flex-col justify-center gap-y-5 md:w-1/2">
              <h2 className="text-3xl md:text-4xl overflow-hidden text-limeYellow">
                {title}
              </h2>
              <p className="text-lg md:text-lg overflow-hidden">
                {describtion}
              </p>
              <div className="w-full gap-x-5 flex justify-center md:justify-start">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={githubLink}
                  className="bg-inherit overflow-hidden w-28 grid place-content-center text-light border-2 border-limeYellow hover:bg-light hover:transition-all hover:text-dark rounded-sm py-1"
                >
                  Github
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={liveSiteLink}
                  className="bg-dark overflow-hidden w-28 grid place-content-center rounded-md text-light border-2 border-limeYellow hover:bg-light hover:transition-all hover:text-dark"
                >
                  • Live site
                </Link>
              </div>
            </div>

            <div className="w-full h-[40rem] flex-1 grid overflow-hidden place-content-center md:w-96 md:h-[15rem]">
              <div className="w-[80vw] h-[13rem] max-w-3xl text-center relative flex overflow-hidden my-0 mx-auto md:h-[15rem] md:w-[37vw]">
                {items?.map((item, itemIndex) => {
                  const { id, img } = item;

                  let position = "nextSlide";
                  if (itemIndex === index) {
                    position = "activeSlide";
                  }
                  if (
                    itemIndex === index - 1 ||
                    (index === 0 && itemIndex === items.length - 1)
                  ) {
                    position = "lastSlide";
                  }
                  return (
                    <article
                      className={`absolute top-0 overflow-hidden left-0 w-full h-full opacity-0 transition-all ease-in-out duration-500 ${
                        position === "nextSlide"
                          ? "translate-x-full"
                          : position === "activeSlide"
                          ? "opacity-100 translate-x-0"
                          : "-translate-x-full"
                      }`}
                      key={id}
                    >
                      <img
                        src={img}
                        alt={id}
                        className="w-full h-full object-cover shadow-md"
                      />
                    </article>
                  );
                })}
                <button
                  className="absolute top-1/2 -translate-y-1/2 bg-dark text-light w-7 h-7 grid place-content-center text-xl rounded-sm cursor-pointer transition-all ease-in-out md:w-10 md:h-10 md:text-lg"
                  onClick={prevSlide}
                >
                  <FiChevronLeft />
                </button>
                <button
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-dark text-light w-7 h-7 grid place-content-center text-xl rounded-sm cursor-pointer transition-all ease-in-out md:w-10 md:h-10 md:text-lg"
                  onClick={nextSlide}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="w-full h-[40rem] flex-1 grid overflow-hidden place-content-center md:w-96 md:h-[15rem]">
              <div className="w-[80vw] h-[13rem] max-w-3xl text-center relative flex overflow-hidden my-0 mx-auto md:h-[15rem] md:w-[37vw]">
                {items?.map((item, itemIndex) => {
                  const { id, img } = item;

                  let position = "nextSlide";
                  if (itemIndex === index) {
                    position = "activeSlide";
                  }
                  if (
                    itemIndex === index - 1 ||
                    (index === 0 && itemIndex === items.length - 1)
                  ) {
                    position = "lastSlide";
                  }
                  return (
                    <article
                      className={`absolute top-0 overflow-hidden left-0 w-full h-full opacity-0 transition-all ease-in-out duration-500 ${
                        position === "nextSlide"
                          ? "translate-x-full"
                          : position === "activeSlide"
                          ? "opacity-100 translate-x-0"
                          : "-translate-x-full"
                      }`}
                      key={id}
                    >
                      <img
                        src={img}
                        alt={id}
                        className="w-full h-full object-cover shadow-md"
                      />
                    </article>
                  );
                })}
                <button
                  className="absolute top-1/2 -translate-y-1/2 bg-dark text-light w-7 h-7 grid place-content-center text-xl rounded-sm cursor-pointer transition-all ease-in-out md:w-10 md:h-10 md:text-lg"
                  onClick={prevSlide}
                >
                  <FiChevronLeft />
                </button>
                <button
                  className="absolute top-1/2 -translate-y-1/2 right-0 bg-dark text-light w-7 h-7 grid place-content-center text-xl rounded-sm cursor-pointer transition-all ease-in-out md:w-10 md:h-10 md:text-lg"
                  onClick={nextSlide}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>

            <div className="w-full h-[20rem] flex-1 flex flex-col text-center justify-center gap-y-5 md:w-1/2">
              <h2 className="text-3xl md:text-4xl overflow-hidden text-limeYellow">
                {title}
              </h2>
              <p
                className="text-lg md:text-lg overflow-hid
              den"
              >
                {describtion}
              </p>
              <div className="w-full flex gap-x-5 justify-center">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={githubLink}
                  className="bg-ligh overflow-hidden bg-dark w-28 grid place-content-center rounded-md py-1 text-light border-2 border-limeYellow hover:bg-light hover:transition-all hover:text-dark"
                >
                  Github
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to={liveSiteLink}
                  className="bg-dark overflow-hidden w-28 grid place-content-center rounded-md py-1 text-light border-2 border-limeYellow hover:bg-light hover:transition-all hover:text-dark"
                >
                  • Live site
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Slider;
