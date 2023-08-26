// import { Swiper } from 'swiper';
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./App.css";

function App() {
  const slides = [
    {
      id:1,
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Nissan - 2018",
    },
    {
      id:2,
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Mercedes-Benz - 2018",
    },
    {
      id:3,
      image:
        "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      title: "Toyota - 2018",
    },
    {
      id:4,
      image:
        "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Honda - 2018",
    },
  ];

  const handleSlider = (slider) => {
    console.log(slider)
    document.title = slides[slider.activeIndex]?.title;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection:true
        }}
        speed={1200}
        // loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".left-arrow-btn",
          prevEl: ".right-arrow-btn",
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onSlideChange={handleSlider}
      >
        {slides?.map((i) => (
            <SwiperSlide key={i?.id}>
              <div style={{ width: "80%", height: "80vh" }} className="fluid">
                <img src={i?.image} alt={i?.title} />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
      <div className="slider-arrow-center">
        <button className="prev left-arrow-btn">
          <i className="ri-arrow-left-line"></i>
        </button>
        <button className="next right-arrow-btn">
          <i className="ri-arrow-right-line"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
