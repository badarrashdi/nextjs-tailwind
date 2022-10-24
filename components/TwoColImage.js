import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";
const TwoColImage = ({ blok }) => {
  return (
    <section id="about" className="relative pt-2 md:pt-12 about-area">
      <div className="container">
        <div className="row">
          <div className="w-full lg:w-1/2">
            <div
              className="mx-4 mt-12 about-content wow fadeInLeftBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
              <div className="mb-4 section-title">
                <div className="line" />
                <h2 className="title">
                  {blok.title}
                </h2>
              </div>
              <p className="mb-8 text-lead">
               {render(blok.description)}
              </p>
              {
                blok.cta &&  <a href={blok.cta} className="main-btn gradient-btn">
                {blok.cta_label}
              </a>
              }
             
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div
              className="mx-4 mt-12 text-center about-image wow fadeInRightBig"
              data-wow-duration="1s"
              data-wow-delay="0.5s"
            >
               <Image src={blok.image?.filename} alt="Our Company" layout="responsive" width="558px" height="356px" />
            </div>
          </div>
        </div>
      </div>
      <div className="about-shape-1">
            <img src="https://a.storyblok.com/f/171382/x/750d339da8/about-shape-1.svg" alt="shape" />
        </div>
    </section>
  );
};

export default TwoColImage;
