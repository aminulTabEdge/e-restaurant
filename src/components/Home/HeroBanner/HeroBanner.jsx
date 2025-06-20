import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/banner/1.png";
import img2 from "../../../assets/banner/2.png";
import img3 from "../../../assets/banner/3.png";
import "./banner.css";

const images = [
  {
    img: img1,
    caption: "Banner 1",
  },
  {
    img: img2,
    caption: "Banner 2",
  },
  {
    img: img3,
    caption: "Banner 3",
  },
];

const HeroBanner = () => {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        swipeable={true}
        stopOnHover={true}
      
      >
        {/* Way 1 */}

        {/* <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img src={img3} />
        </div> */}

        {/* Way 2 */}
        {images.map((img) => (
          <div
            key={img.caption}
            className=" lg:h-[600px] container mx-auto"
          >
            <img
              className="object-cover"
              src={img.img}
              alt={img.caption}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
