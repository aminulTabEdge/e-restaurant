import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./productSlider.css";

const productImages = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLDZB2ZPqXeGIZ9BwojAT4LcQmC0zRZdhRg&s",
    caption: "Burger images",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqZdMTxQRjUhQAC_pU6FdxieXabEeAhZT7Q&s",
    caption: "Burger images",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsy5ZBbucwY5XFLqo_wlVUcWwnjqIq3uUhg&s",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsy5ZBbucwY5XFLqo_wlVUcWwnjqIq3uUhg&s",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhLDZB2ZPqXeGIZ9BwojAT4LcQmC0zRZdhRg&s",
    caption: "Burger images",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtqZdMTxQRjUhQAC_pU6FdxieXabEeAhZT7Q&s",
    caption: "Burger images",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsy5ZBbucwY5XFLqo_wlVUcWwnjqIq3uUhg&s",
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtsy5ZBbucwY5XFLqo_wlVUcWwnjqIq3uUhg&s",
  },
];

const ProductSlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper container mx-auto"
      >
        {productImages.map((product) => (
          <SwiperSlide>
            <img src={product.img} alt="" className="w-full object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
