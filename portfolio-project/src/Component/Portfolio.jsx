import React from "react";
import Container from "../Layer/Container";
import TitleHeader from "../Layer/TitleHeader";
import orebi from "/Orebi.png";
import furnishop from "/Furnishop.png";
import agenc from "/Agenc.png";
import gericht from "/Gericht.png"

import Slider from "react-slick";
import { FiExternalLink } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px] right-1/2 translate-x-[200%] -bottom-[60px] rounded-full items-center justify-center bg-[#FFFFFF] shadow  hover:bg-[#20c997]  transition-all duration-500 cursor-pointer  z-10  "
      style={{ ...style, display: "flex", background: "" }}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center transition-all duration-500">
        <FaArrowRight />
      </div>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <div
      className="absolute w-[36px] md:w-[50px] h-[36px] md:h-[50px]  left-1/2 -translate-x-[200%] -bottom-[60px] rounded-full items-center justify-center bg-[#FFFFFF] shadow hover:bg-[#20c997]  transition-all duration-500 cursor-pointer z-10  "
      style={{ ...style, display: "flex", background: "" }}
      onClick={onClick}
    >
      <div className="w-full h-full flex items-center justify-center transition-all duration-500">
        <FaArrowLeft />
      </div>
    </div>
  );
}

let SliderCard = ({ image, name, techs, link }) => {
  return (
    <div className={` relative aspect-[624/330]  md:aspect-[624/350] rounded-lg   font-pop mx-1.5 md:mx-3`}>
      <img className="h-full w-full rounded-lg  " src={image} alt={image} />

      <div className=" h-full w-full absolute top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500 justify-between pb-3">
        <h3 className="text-[25px] md:text-[40px] text-white/70 text-center">
          {name}
        </h3>

        <div className="mx-auto ">
          <h3 className="text-[16px] md:text-[22px] text-white/70 text-center">
            Technologies
          </h3>

          <div className="tools flex gap-2 mt-3  ">
            {techs.map((item, index) => (
              <h5
                key={index}
                className=" px-1 md:px-4  py-[3px]  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold  text-[12px] md:text-[16px] lg:text-sm xl:text-base"
              >
                {item}
              </h5>
            ))}
          </div>
        </div>

        <div className=" flex justify-between">
          <div className=" px-2 md:px-3 py-1 md:py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-5">
            <a
              className="flex justify-center items-center gap-2 text-[12px] md:text-[16px]"
              href={link}
            >
              <p>Live Link</p>
              <FiExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    centerPadding: "60px",
    centerMode: true,
    className: "center",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <div id="portfolio" className="bg-[#343a40] pt-[72px] pb-[100px]">
      <Container>
        <TitleHeader Heading="portfolio" Ptext="my work" />

        <div className="">
          <Slider {...settings} className="">
            <SliderCard
              image={orebi}
              techs={["HTML5", "Tailwind CSS", "JavaScript", "React"]}
              name={"OREBI"}
              link={""}
            />
            <SliderCard
              image={furnishop}
              techs={["HTML5", "Tailwind CSS", "JavaScript", "React"]}
              name={"FurniShop"}
              link={"https://furni-shop-snms.vercel.app"}
            />
            <SliderCard
              image={agenc}
              techs={["HTML5", "Bootstrap", "jquery", "JavaScript"]}
              name={"GERICHT"}
              link={""}
            />


            <SliderCard
              image={gericht}
              techs={["HTML5", "Tailwind", "jquery", "JavaScript"]}
              name={"Agenc"}
              link={"https://agenc-snms.vercel.app/"}
            />

            {/* <div className={` relative   font-pop`}>
              <img
                className="w-screen max-w-[624px] h-[230px]  md:h-[300px] rounded-lg  "
                src={orebi}
                alt=""
              />

              <div className=" absolute w-screen max-w-[624px]   h-[230px]  md:h-[300px] top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500  ">
                <h3 className="text-[30px] md:text-[40px] text-white/70 text-center">
                  OREBI
                </h3>

                <div className="mx-auto my-5">
                  <h3 className="text-[18px] md:text-[22px] text-white/70 text-center">
                    Technologies
                  </h3>

                  <div className="tools flex gap-2 mt-5  ">
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold  text-[12px] md:text-[16px]">
                      HTML5
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      Tailwind CSS
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      JavaScript
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      React
                    </h5>
                  </div>
                </div>

                <div className=" flex justify-between">
                  <div className=" px-[10px] md:px-3 py-1 md:py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-8">
                    <a
                      className="flex justify-center items-center gap-2 text-[12px] md:text-[16px]"
                      href=""
                    >
                      {" "}
                      <p>Live Link</p>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className={` relative  font-pop`}>
              <img
                className="w-screen max-w-[624px]  h-[230px]  md:h-[300px] rounded-lg  "
                src={furnishop}
                alt=""
              />

              <div className=" absolute w-screen max-w-[624px]   h-[230px]  md:h-[300px] top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500  ">
                <h3 className="text-[30px] md:text-[40px] text-white/70 text-center">
                  FurniShop
                </h3>

                <div className="mx-auto my-5">
                  <h3 className="text-[18px] md:text-[22px] text-white/70 text-center">
                    Technologies
                  </h3>

                  <div className="tools flex gap-2 mt-5  ">
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold  text-[12px] md:text-[16px]">
                      HTML5
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      Tailwind CSS
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      JavaScript
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      React
                    </h5>
                  </div>
                </div>

                <div className=" flex justify-between">
                  <div className=" px-[10px] md:px-3 py-1 md:py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-8">
                    <a
                      className="flex justify-center items-center gap-2 text-[12px] md:text-[16px]"
                      href="https://furni-shop-snms.vercel.app/"
                    >
                      {" "}
                      <p>Live Link</p>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}

            {/* <div className={` relative  font-pop`}>
              <img
                className="w-screen max-w-[624px]  h-[230px]  md:h-[300px] rounded-lg  "
                src={agenc}
                alt=""
              />

              <div className=" absolute w-screen max-w-[624px]   h-[230px]  md:h-[300px] top-0  bg-black/65 flex flex-col rounded-lg opacity-0 hover:opacity-100 transition-all duration-500  ">
                <h3 className="text-[30px] md:text-[40px] text-white/70 text-center">
                  Agenc
                </h3>

                <div className="mx-auto my-5">
                  <h3 className="text-[18px] md:text-[22px] text-white/70 text-center">
                    Technologies
                  </h3>

                  <div className="tools flex gap-2 mt-5  ">
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold  text-[12px] md:text-[16px]">
                      HTML5
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      Bootstrap
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      jquery
                    </h5>
                    <h5 className=" px-[10px] md:px-4 py-1  md:py-2 bg-[#212529]/80 text-white/70 rounded-full font-semibold text-[12px] md:text-[16px]">
                      JavaScript
                    </h5>
                  </div>
                </div>

                <div className=" flex justify-between">
                  <div className=" px-[10px] md:px-3 py-1 md:py-2 bg-[#212529]/80 text-white/70 rounded-full  flex justify-center items-center cursor-pointer mx-auto font-medium  mt-8">
                    <a
                      className="flex justify-center items-center gap-2 text-[12px] md:text-[16px]"
                      href="https://agenc-snms.vercel.app/"
                    >
                      {" "}
                      <p>Live Link</p>
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
