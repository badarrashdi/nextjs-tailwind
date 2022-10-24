import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
const GricColumn = ({ blok }) => {
  return (
    <section className="relative pt-16 pn-10">
      <div className="container text-center section-title max-w-[700px]">
        <div className="m-auto line" />
        <h2 className="title mb-4 font-bold">{blok.title}</h2>
        <p className="text-lead">{blok.description}</p>
      </div>
      <div className="container">
        <div className="row justify-around mt-8 flex-row">
         {
          blok.columns.map((item, i) => {
            return(
              <div key={i} className={`w-full px-3 ${blok.col_per_row == 'w-1/4' ? 'sm:w-1/2 lg:w-1/4' : blok.col_per_row == 'w-1/3' ? 'sm:w-1/2 lg:w-1/3' : 'md:w-1/2'  } mb-4 text-center`}>
                {item.icon && <img className="inline-block mb-4" src={item.icon.filename} alt={item.title} />}
                <h3 className="text-md mb-3 font-bold">{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          })
         } 
         
        </div>
      </div>
    </section>
  );
};

export default GricColumn;
