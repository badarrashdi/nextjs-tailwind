import { storyblokEditable } from "@storyblok/react";

const Testimonials = ({ blok }) => {
  return (
    <section id="testimonial" className="testimonial-area pt-120">
      <div className="container">
        <div className="justify-center row">
          <div className="w-full lg:w-2/3">
            <div className="pb-10 text-center section-title">
              <div className="m-auto line" />
              <h3 className="title">{blok.title}</h3>
            </div>
          </div>
        </div>

        <div
          className="row testimonial-active wow fadeInUpBig"
          data-wow-duration="1s"
          data-wow-delay="0.8s"
        >
          {blok.testimonials.map((item, i) => {
            return (
              <div key={i} className="w-full lg:w-1/3">
                <div className="single-testimonial">
                  <div className="flex items-center justify-between mb-6">
                    <div className="quota">
                      <i className="text-4xl duration-300 lni lni-quotation text-theme-color" />
                    </div>
                    <div className="star">
                      <ul className="flex">
                        <li>
                          <i className="lni lni-star-filled text-theme-color-2" />
                        </li>
                        <li>
                          <i className="lni lni-star-filled text-theme-color-2" />
                        </li>
                        <li>
                          <i className="lni lni-star-filled text-theme-color-2" />
                        </li>
                        <li>
                          <i className="lni lni-star-filled text-theme-color-2" />
                        </li>
                        <li>
                          <i className="lni lni-star-filled text-theme-color-2" />
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mb-8">
                    <p>{item.description}</p>
                  </div>
                  <div className="flex items-center testimonial-author">
                    
                    <div className="author-content media-body">
                      <h6 className="mb-1 text-xl font-bold text-gray-900">
                        {item.title}
                      </h6>
                      <p>{item.designation}</p>
                    </div>
                  </div>
                </div>{" "}
              </div>
            );
          })}
        </div>
      </div>
      {/* container */}
    </section>
  );
};

export default Testimonials;
