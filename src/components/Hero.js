import { useRef } from "react";
import {
  useGsapShutterUnveil,
  useGsapPhotoScroller,
  useGsapPhotoLevitate,
} from "../Hooks/gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const shutter1 = useRef(null);
  const shutter2 = useRef(null);
  const photo1Ref = useRef(null);
  const photo2Ref = useRef(null);
  const photo3Ref = useRef(null);
  const photo4Ref = useRef(null);
  const photo5Ref = useRef(null);

  const photosArr = [photo1Ref, photo2Ref, photo3Ref, photo4Ref, photo5Ref];

  useGsapShutterUnveil(shutter1, 0, heroRef);
  useGsapShutterUnveil(shutter2, 0.3, heroRef);
  useGsapPhotoScroller(photosArr);
  useGsapPhotoLevitate(photosArr, heroRef);

  return (
    <section className="hero wrapper" ref={heroRef}>
      <h1 className="ethereal" style={{color:"#00008B"}}>
      Enchanto <span ref={shutter1}></span>
      </h1>
      <h1 className="canvas" style={{color:"#00008B"}}>
         Enigma <span ref={shutter2}></span>
      </h1>
      <div className="photos">
        <div
          ref={photo1Ref}
          className="photo one"
          style={{
            backgroundImage:
              'url("/pyro_logo.png")',
          }}
        ></div>
        <div
          ref={photo2Ref}
          className="photo two"
          style={{
            backgroundImage:
              'url("p5.jpg")',
          }}
        ></div>
        <div
          ref={photo3Ref}
          className="photo three"
          style={{
            backgroundImage:
              'url("/pyro_logo.png")',
          }}
        ></div>
        <div
          ref={photo4Ref}
          className="photo four"
          style={{
            backgroundImage:
              'url("/pyro_3.jpg")',
          }}
        ></div>
        <div
          ref={photo5Ref}
          className="photo five"
          style={{
            backgroundImage:
              'url("/p6.jpg")',
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
