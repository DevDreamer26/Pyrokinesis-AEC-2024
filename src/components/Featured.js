import { useRef } from "react";
import {
  useGsapFeaturedLeftShutter,
  useGsapFeaturedRightShutter,
} from "../Hooks/gsap";
import SectionTitle from "./SectionTitle";

const Featured = ({ minHeight = false }) => {
  const featuredRef = useRef(null);
  const featuredLeftShutter = useRef(null);
  const featuredRightShutter = useRef(null);

  useGsapFeaturedLeftShutter(featuredLeftShutter, featuredRef);
  useGsapFeaturedRightShutter(featuredRightShutter, featuredRef);

  return (
    <section
      className="featured wrapper"
      ref={featuredRef}
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Featured" />
      <div className="featured-wrapper">
        <div className="featured-left">
          <span>Enchanto Enigma</span>
          <img
            src="/pyro-poster.jpg"
            alt="Photo of Woman in Denim Jacket Holding Red Telephone"
          />
          <span className="left-shutter" ref={featuredLeftShutter}></span>
        </div>
        <div className="featured-right">
          <span>Annual Techno-Cultural fest of Assam Engineering College</span>
          <img
            src="https://scontent.fgau1-2.fna.fbcdn.net/v/t1.6435-9/52351646_10155749549781008_8202759679860801536_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=i3mRNh1JdS8AX_j3nVF&_nc_ht=scontent.fgau1-2.fna&oh=00_AfDlqf6mF3gWrMXkqbN-8YYQAV2la10hV31kPCPIcfQDPw&oe=65BC8D57"
            alt="Pyro photo 2024"
          />
          <span className="right-shutter" ref={featuredRightShutter}></span>
        </div>
      </div>
    </section>
  );
};

export default Featured;
