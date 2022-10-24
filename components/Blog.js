import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
const Blog = ({ blok }) => {
  return (
    <div className="container pt-60 max-w-screen-lg">
      <div className="pb-6 section-title">
        <div className="line" />
        <h1 className="title">{blok.title}</h1>
        
      </div>
      <img src={blok.banner.filename} alt="" width="100%" />
      <div className="main-content pt-10">
        {render(blok.long_description)}
      </div>
    </div>
  );
};

export default Blog;
