import SectionTitle from "./SectionTitle";
import Blog from "./Event";
import { blogsArr } from "../data/Events";

const Favourites = ({ minHeight }) => {
  return (
    <section
      className="favourites wrapper"
      style={minHeight ? { minHeight: "100vh" } : null}
    >
      <SectionTitle title="Favourites" />
      <div className="blogs">
        {blogsArr.map((blog) => (
          <Blog key={blog.id} blog={blog} />
        ))}
      </div>
    </section>
  );
};

export default Favourites;
