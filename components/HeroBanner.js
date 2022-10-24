import { useRouter } from "next/router";
import Script from "next/script";
const HeroBanner = ({ blok }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
    <Script
        id="particlesjs-js"
        src="https://a.storyblok.com/f/171382/x/ed6c25cada/particles-min.js"
        onLoad={() => {
          if (document.getElementById("particles-1")) particlesJS("particles-1", {
            "particles": {
                "number": {
                    "value": 40,
                    "density": {
                        "enable": !0,
                        "value_area": 4000
                    }
                },
                "color": {
                    "value": ["#FFFFFF", "#FFFFFF", "#FFFFFF"]
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#fff"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 33,
                        "height": 33
                    }
                },
                "opacity": {
                    "value": 0.15,
                    "random": !0,
                    "anim": {
                        "enable": !0,
                        "speed": 0.2,
                        "opacity_min": 0.15,
                        "sync": !1
                    }
                },
                "size": {
                    "value": 50,
                    "random": !0,
                    "anim": {
                        "enable": !0,
                        "speed": 2,
                        "size_min": 5,
                        "sync": !1
                    }
                },
                "line_linked": {
                    "enable": !1,
                    "distance": 150,
                    "color": "#ffffff",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": !0,
                    "speed": 1,
                    "direction": "top",
                    "random": !0,
                    "straight": !1,
                    "out_mode": "out",
                    "bounce": !1,
                    "attract": {
                        "enable": !1,
                        "rotateX": 600,
                        "rotateY": 600
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": !1,
                        "mode": "bubble"
                    },
                    "onclick": {
                        "enable": !1,
                        "mode": "repulse"
                    },
                    "resize": !0
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1,
                        }
                    },
                    "bubble": {
                        "distance": 250,
                        "size": 0,
                        "duration": 2,
                        "opacity": 0,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 400,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": !0
        });
        }}
		onError={(e) => {
          console.error('Script failed to load', e)
        }}
      />
    <div
    id="home"
    className="header-hero"
    style={{ backgroundImage: "url(https://a.storyblok.com/f/171382/x/bb87c25e74/banner-bg.svg)" }}
  >
    <div className="container">
      <div className="justify-center row">
        <div className="w-full lg:w-2/3">
          <div className="pt-32 mb-12 text-center lg:pt-48 header-hero-content">
            <h1
              className="text-4xl font-light leading-tight text-white header-sub-title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.2s"
            >
              {blok.title}
            </h1>
            <h2
              className="mb-3 text-4xl font-bold text-white header-title wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.5s"
            >
              {blok.sub_heading}
            </h2>
            <p
              className="mb-8 text-white text wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="0.8s"
            >
             {blok.description}
            </p>
            <a
              href="/contact-us"
              className="main-btn gradient-btn gradient-btn-2 wow fadeInUp"
              data-wow-duration="1.3s"
              data-wow-delay="1.1s"
            >
              Get Started
            </a>
          </div>{" "}
          {/* header hero content */}
        </div>
      </div>{" "}
      {/* row */}
      <div className="justify-center row">
        <div className="w-full lg:w-2/3">
          <div
            className="text-center header-hero-image wow fadeIn"
            data-wow-duration="1.3s"
            data-wow-delay="1.4s"
          >
            <img src="https://a.storyblok.com/f/171382/1126x630/dfe7da20c1/header-hero.png" alt="hero" />
          </div>{" "}
          {/* header hero image */}
        </div>
      </div>{" "}
      {/* row */}
    </div>{" "}
    {/* container */}
    <div id="particles-1" className="particles" />
  </div>
  </>
  );
};

export default HeroBanner;
