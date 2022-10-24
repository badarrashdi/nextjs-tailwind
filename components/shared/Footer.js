import { storyblokEditable } from "@storyblok/react";

const Footer = ({ blok }) => (
  <footer id="footer" className="relative z-10 footer-area pt-120">
  <div
    className="footer-bg"
    style={{ backgroundImage: "url(https://a.storyblok.com/f/171382/x/51caf5f5c6/footer-bg.svg)" }}
  />
  <div className="container">
    <div
      className="px-6 pt-10 pb-20 mb-12 bg-white rounded-lg shadow-xl md:px-12 subscribe-area wow fadeIn"
      data-wow-duration="1s"
      data-wow-delay="0.5s"
    >
      <div className="row">
        <div className="w-full lg:w-1/2">
          <div className="lg:mt-12 subscribe-content">
            <h2 className="text-2xl font-bold sm:text-4xl subscribe-title">
            Want to discuss your project?<br/> Let’s get started.
            </h2>
            <p className="block font-normal">Contact us and we will start working within 48 hours.</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="mt-12 text-right">
          <a
              href="/contact-us"
              className="main-btn gradient-btn"
              data-wow-duration="1.3s"
              data-wow-delay="1.1s"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* subscribe area */}
    <div className="footer-widget pb-120">
      <div className="row">
        <div className="w-4/5 md:w-3/5 lg:w-2/6">
          <div
            className="mt-12 footer-about wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <a className="inline-block mb-8 logo" href="index.html">
              <img src="https://a.storyblok.com/f/171382/1436x406/574689ab7a/logo-white.png" width="190px" alt="logo" className="w-40" />
            </a>
            <p className="pb-0 pr-10 leading-snug text-white">
              Accelerance Technologies Private Limited<br/>
              Daryaganj, Delhi - 110006
            </p>
            <p className="pb-10 pr-10 leading-snug text-white">Registration No - U72900DL2022PTC404295</p>
            <ul className="flex footer-social">
              
              <li>
                <a href="https://twitter.com/Accelerancetech">
                  <i className="lni lni-twitter-filled" />
                </a>
              </li>
             
              <li>
                <a href="https://www.linkedin.com/in/accelerance-tech-4a1480249/">
                  <i className="lni lni-linkedin-original" />
                </a>
              </li>
            </ul>
          </div>{" "}
          {/* footer about */}
        </div>
        <div className="w-4/5 sm:w-2/3 md:w-3/5 lg:w-2/6">
          <div className="row">
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div
                className="mt-12 link-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.4s"
              >
                <div className="footer-title">
                  <h4 className="mb-8 text-2xl font-bold text-white">
                    Quick Link
                  </h4>
                </div>
                <ul className="link">
                 
                  <li>
                    <a href="/privacy-policy">Privacy Policy</a>
                  </li>
                 
                 
                </ul>
              </div>{" "}
              {/* footer wrapper */}
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2">
              <div
                className="mt-12 link-wrapper wow fadeIn"
                data-wow-duration="1s"
                data-wow-delay="0.6s"
              >
                <div className="footer-title">
                  <h4 className="mb-8 text-2xl font-bold text-white">
                    Resources
                  </h4>
                </div>
                <ul className="link">
                  <li>
                    <a href="/about-us">About Us</a>
                  </li>
                  <li>
                    <a href="/services">Services</a>
                  </li>
                   <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                  <li>
                    <a href="/contact-us">Contact</a>
                  </li>
                </ul>
              </div>{" "}
              {/* footer wrapper */}
            </div>
          </div>
        </div>
        <div className="w-4/5 sm:w-1/3 md:w-2/5 lg:w-2/6">
          <div
            className="mt-12 footer-contact wow fadeIn"
            data-wow-duration="1s"
            data-wow-delay="0.8s"
          >
            <div className="footer-title">
              <h4 className="mb-8 text-2xl font-bold text-white">Contact Us</h4>
            </div>
            <ul className="contact">
              <li><a href="tel:+919711091363">+91 9711091363</a></li>
              <li><a href="tel:+97338825180">+973 38825180</a></li>
              <li><a href="mailto:info@accelerance.tech">info@accelerance.tech</a></li>
              
            </ul>
          </div>{" "}
          {/* footer contact */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    
    {/* footer copyright */}
  </div>{" "}
  {/* container */}
  <div id="particles-2" className="particles" />
</footer>

);

export default Footer;
