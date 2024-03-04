import React, { useRef, useState, useContext } from "react";

import FitnessContext from "../context/FitnessContext";

import Typography from "@mui/material/Typography";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination } from "swiper/modules";

function HorizontalScrollBar({ data }) {
  const { setExercises, bodyPart, setBodyPart } = useContext(FitnessContext);
  return (
    <>
      {console.log(data)}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {data
          ? data.map((item) => (
              <SwiperSlide
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                item={item}
                bodyPart={bodyPart}
                setBodyParts={setBodyPart}
                onClick={() => {
                  console.log(item);
                  setBodyPart(item);
                  window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
                }}
              >
                <Typography
                  textTransform="capitalize"
                  variant="h5"
                  gutterBottom
                >
                  {item}
                </Typography>
              </SwiperSlide>
            ))
          : ""}
      </Swiper>
    </>
  );
}
export default HorizontalScrollBar;
