import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MentorCard from "./MentorCard";
import PropTypes from "prop-types";

function MonthlyMentors({ mentors }) {
  return (
    <section className=" overflow-hidden w-full sm:w-[800px] p-4  rounded-lg">
      <h2 className="text-lg font-semibold mb-4 text-white">Monthly Mentors</h2>
      <Swiper
        spaceBetween={150}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 100 },
        }}
        className="swiper-container flex gap-5"
      >
        {mentors.map((mentor) => (
          <SwiperSlide
            key={mentor._id}
            className="w-full h-fit  shadow-md   flex items-center justify-center text-white"
          >
            <MentorCard mentor={mentor} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

MonthlyMentors.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MonthlyMentors;
