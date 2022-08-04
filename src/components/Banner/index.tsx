//@ts-nocheck
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner from "../../assets/banner.png";
import bannerMobile from "../../assets/banner-mobile.png";
import useResponsive from "../../hooks/useResponsive";

const Banner = () => {
  const { xs } = useResponsive();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    customPaging: (i: any) => (
      <div
        className={`border border-gray-100 m-4 p-1 bg-transparent ${
          i && "border-white"
        }`}
      ></div>
    ),
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="">
          <img
            src={xs ? bannerMobile : banner}
            alt="banner"
            className="w-full h-[600px]"
          />
        </div>
        <div className="">
          <img
            src={xs ? bannerMobile : banner}
            alt="banner"
            className="w-full h-[600px]"
          />
        </div>
        <div className="">
          <img
            src={xs ? bannerMobile : banner}
            alt="banner"
            className="w-full h-[600px]"
          />
        </div>
        <div className="">
          <img
            src={xs ? bannerMobile : banner}
            alt="banner"
            className="w-full h-[600px]"
          />
        </div>
        <div className="">
          <img
            src={xs ? bannerMobile : banner}
            alt="banner"
            className="w-full h-[600px]"
          />
        </div>
      </Slider>

      <div className="w-full h-0.5 absolute z-0 left-0 bottom-10 bg-white opacity-30"></div>
    </div>
  );
};

export default Banner;
