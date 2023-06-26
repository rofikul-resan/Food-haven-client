import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const image = [
  "/client-1.png",
  "/client-2.png",
  "/client-3.png",
  "/client-4.png",
  "/client-5.png",
  "/client-hover-1.png",
  "/client-hover-2.png",
  "/client-hover-3.png",
  "/client-hover-4.png",
  "/client-hover-5.png",
];
const Sponsor = () => {
  return (
    <div className="py-10">
      <div className="md:w-3/5 px-6 mx-auto py-10 text-white text-center">
        <h1 className="mb-6">Our sponsor</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          eaque quo totam voluptatum minima nostrum repellendus et, incidunt vel
          necessitatibus vero fugiat voluptas eveniet vitae,
        </p>
      </div>
      <div className="md:px-20 mx-6">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {image.map((img, i) => (
            <SwiperSlide key={i}>
              {" "}
              <img src={img} className="w-44" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Sponsor;
