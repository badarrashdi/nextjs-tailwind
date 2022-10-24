import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { render } from "storyblok-rich-text-react-renderer";
const TwoColContent = ({ blok }) => {
  return (
    <section className={`two-col-content relative mt-10 pt-10 pb-10 md:pt-16 md:pb-16 ${blok.tailwind_class} ${blok.background_color == true && 'bg-[#fafafa]'}`}>
      <style jsx global>
        {
          `
          .two-col-content h2, .two-col-content h3 {
            font-size: 28px;
            margin-bottom: 15px;
            font-weight: bold;
          }
          .two-col-content p {
            font-size: 18px;
          }
          `
        }
      </style>
      <div className="container">
        <div className="row">
          <div className="w-full md:pr-4 lg:w-1/2">
            {render(blok.col_one_content)}
          </div>
          <div className="w-full md:pl-4 lg:w-1/2">
            {render(blok.col_two_content)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoColContent;
