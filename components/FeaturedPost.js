import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
const FeaturedPost = ({ blok }) => {
  return(
    <section id="blog" className="blog-area pt-120">
  <div className="container">
    <div className="row">
      <div className="w-full lg:w-1/2">
        <div className="pb-8 section-title">
          <div className="line" />
          <h3 className="title">
            <span>Our Recent</span> Blog Posts
          </h3>
        </div>{" "}
        {/* section title */}
      </div>
    </div>{" "}
    {/* row */}
    <div className="justify-center row">
      {
        blok.posts.map(function(item, i){
          return(
            <div key={i} className="w-full md:w-2/3 lg:w-1/3">
            <div
              className="mx-4 mt-10 single-blog wow fadeIn"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <div className="mb-5 overflow-hidden blog-image rounded-xl">
                <Image className="w-full" src={item.content.banner.filename} alt="blog" layout="responsive" width="388px" height="258px" />
              </div>
              <div className="blog-content">
                <ul className="flex mb-5 meta">
                  <li>
                    Posted By: <a href="/">Admin</a>
                  </li>
                  <li className="ml-12 text-right">{new Date(item.published_at).toLocaleDateString()}</li>
                </ul>
                <p className="mb-6 text-2xl leading-snug text-gray-900">
                 {item.content.title}
                </p>
                <a className="text-theme-color-2" href={item.full_slug}>
                  Learn More
                  <i className="ml-2 lni lni-chevron-right" />
                </a>
              </div>
            </div>
          </div>
          )
        })
      }


    </div>
  </div>
</section>

  )
}

export default FeaturedPost;
