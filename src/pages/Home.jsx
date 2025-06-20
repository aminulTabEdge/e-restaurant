import HeroBanner from "../components/Home/HeroBanner/HeroBanner";
import ProductSlider from "../components/Home/ProductSlider/ProductSlider";
import Heading from "../components/Typography/Heading";

const Home = () => {
  return (
    <div className="space-y-4">
      <HeroBanner />
      <Heading title="order online" subtitle="From 11:00am to 10:00pm" />
      <ProductSlider />
    </div>
  );
};

export default Home;
