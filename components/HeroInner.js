import { storyblokEditable } from "@storyblok/react";
import { render } from "storyblok-rich-text-react-renderer";
const HeroInner = ({ blok }) => {
  return (
    <>
    <style jsx global>
      {`
        .hero-banner {
          padding-top: 90px;
          position: relative;
        }
        .hero-banner:after {
          content: '';
          background: rgba(56, 71, 213, 0.55);
          position: absolute;
          width: 100%;
          height: 100%;
          left:0;
          top:0;
        }
        .hero-banner p {
          color: ${blok.text_color == 'text-black' ? '#000' : '#fff'}
        }
      `}
    </style>
    <div className="w-full hero-banner relative" {...storyblokEditable(blok)} style={{background: `url(${blok.image.filename}) 0 0`, backgroundSize: 'cover'}}>
      <div className="container relative z-10 py-16 md:h-[300px]">
          <div className="row  items-center h-full ">
          <div className={`max-w-screen-sm ${blok.alignment == 'text-center' && 'mx-auto'}`}>
            <h1 className={`text-xxl text-white ${blok.text_color ? blok.text_color : 'text-white'} `}>{blok.title}</h1>
            <div className={`text-md mt-6 ${blok.text_color ? blok.text_color : 'text-white'}`}>
              {render(blok.description)}
            </div>
          </div>
          </div>
      </div>
    </div>
    </>
  )
};

export default HeroInner;
