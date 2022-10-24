import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
import Image from "next/image";
const Services = ({ blok }) => {
return(
    <section id="features" className="services-area pt-120">
    <div className="container">
      <div className="justify-center row">
        <div className="w-full lg:w-2/3">
          <div className="pb-10 text-center section-title">
            <div className="m-auto line" />
            <h2 className="title">
              {blok.title}
            </h2>
            <p>{render(blok.description)}</p>
          </div>
        </div>
      </div>
      {/* row */}
      <div className="justify-center row">
        {
            blok.services.map(function(item, i){
                return(
                    <div key={i} className={`w-full px-2 ${blok.col_per_row == 'w-1/4' ? 'sm:w-1/2 lg:w-1/4' : blok.col_per_row == 'w-1/3' ? 'sm:w-1/2 md:w-1/3' : 'md:w-1/2'  } mb-4 text-center`}>
                    <div
                      className="single-services wow fadeIn"
                      data-wow-duration="1s"
                      data-wow-delay="0.2s"
                    >
                      <div className="services-icon relative w-[90px] h-[70px]">
                        {item.icon.filename && <Image className="shape" alt={item.title} src={item.icon.filename} layout="fill" objectFit="contain" />}
                      </div>
                      <div className="mt-8 services-content">
                        <h3 className="mb-8 text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="mb-8">
                          {render(item.description)}
                        </p>
                        {item.cta &&
                        <a
                          className="duration-300 hover:text-theme-color"
                          href={item.cta}
                        >
                          Learn More <i className="ml-2 lni lni-chevron-right" />
                        </a>
                        }
                      </div>
                    </div>{" "}
                    {/* single services */}
                  </div>
                )
            })
        }
        

      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
  </section>
)
};

export default Services;
