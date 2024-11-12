import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CourseCard from "./CourseCard";
import PropTypes from "prop-types";

function FeaturedCourses({ mentors, setSelectedCourse }) {
  return (
    <section className="overflow-hidden  w-full h-fit sm:w-[800px] p-4">
      <h2 className="text-lg text-white font-semibold mb-4 ">
        Featured Courses
      </h2>
      <Swiper
        spaceBetween={20}
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
        {mentors
          .flatMap((mentor) => mentor.courses)
          .map((course, index) => (
            <SwiperSlide
              key={course.courseId}
              className="w-full h-[300px] flex items-center justify-center"
              onClick={() => setSelectedCourse(course)}
            >
              <CourseCard course={course} index={index} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

FeaturedCourses.propTypes = {
  mentors: PropTypes.arrayOf(PropTypes.object).isRequired,
  setSelectedCourse: PropTypes.func.isRequired,
};

export default FeaturedCourses;
