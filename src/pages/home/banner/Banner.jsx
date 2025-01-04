import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import Slide from "./Slide";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <Slide
        slide={"slide1"}
        img={img1}
        iSlide1={"#slide4"}
        iSlide2={"#slide2"}
      ></Slide>
      <Slide
        slide={"slide2"}
        img={img2}
        iSlide1={"#slide1"}
        iSlide2={"#slide3"}
      ></Slide>
      <Slide
        slide={"slide3"}
        img={img3}
        iSlide1={"#slide2"}
        iSlide2={"#slide4"}
      ></Slide>
      <Slide
        slide={"slide4"}
        img={img4}
        iSlide1={"#slide3"}
        iSlide2={"#slide1"}
      ></Slide>

      {/* <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
      {/* <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
      {/* <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
