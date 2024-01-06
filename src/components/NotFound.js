import { useRef } from "react";
import { useGsapNotFoundHeadline, useGsapNotFoundImg } from "../Hooks/gsap";

const NotFound = () => {
  const leftHeadlineRef = useRef(null);
  const rightHeadlineRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useGsapNotFoundHeadline(leftHeadlineRef);
  useGsapNotFoundHeadline(rightHeadlineRef, "100vw");
  useGsapNotFoundImg(leftImgRef);
  useGsapNotFoundImg(rightImgRef);

  return (
    <div className="not-found wrapper">
      <div className="headline-1" ref={leftHeadlineRef}>
        Sorry, we couldn't
      </div>
      <div className="img-1" ref={rightImgRef}>
        <img
          src="https://i.pinimg.com/564x/5e/67/1d/5e671d00f3d9f2e88316515ea71ecee0.jpg"
          alt="pyrologo"
        />
      </div>
      <div className="img-2" ref={leftImgRef}>
        <img
          src="https://m.media-amazon.com/images/M/MV5BYjUyZTAxYjAtNDIwZS00NjEwLWJmM2QtMjBlMzJlZmEzOTZlXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg"
          alt="Logo"
        />
      </div>
      <div className="headline-2" ref={rightHeadlineRef}>
        Find that page ...lol
      </div>
    </div>
  );
};

export default NotFound;
