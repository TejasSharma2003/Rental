import { BiRightArrowAlt } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CustomButtonGroupAsArrows = ({ next, previous }) => {
  return (
    <div className="review__btn-container">
      <div className="review__btns">
        <span className="review__btn review__btn-left" onClick={previous}>
          <BiLeftArrowAlt />
        </span>
        <span className="review__btn review__btn-right" onClick={next}>
          <BiRightArrowAlt />
        </span>
      </div>
    </div>
  );
};

export { CustomButtonGroupAsArrows, responsive };
