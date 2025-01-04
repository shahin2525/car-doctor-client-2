import PropTypes from "prop-types";
const Slide = ({ slide, img, iSlide1, iSlide2 }) => {
  return (
    <div id={slide} className="carousel-item relative w-full">
      <img src={img} className="w-full rounded-lg" />
      <div className="absolute bottom-0 left-5 right-5 flex h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
        <div className="space-y-5 w-1/3 pl-10 text-white">
          <h1 className=" font-bold text-6xl">
            Affordable Price For Car Services
          </h1>
          <p>
            There are many variations of passages of available ,but the majority
            have suffered alteration in some form
          </p>
          <div>
            <button className="btn btn-success mr-4">Discover more</button>
            <button className="btn btn-warning">Latest project</button>
          </div>
        </div>
      </div>
      <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
        <a href={iSlide1} className="btn btn-circle mr-4 bg-green-400">
          ❮
        </a>
        <a href={iSlide2} className="btn btn-circle bg-green-400">
          ❯
        </a>
      </div>
    </div>
  );
};

export default Slide;
Slide.propTypes = {
  slide: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  iSlide1: PropTypes.string.isRequired,
  iSlide2: PropTypes.string.isRequired,
};
