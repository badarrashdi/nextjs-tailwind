import { storyblokEditable } from "@storyblok/react";
import { useState } from "react";

const Header = ({ props }) => {
  const [navopen, setNavopen] = useState(false)
  const navOpen = () =>{
    setNavopen(!navopen)
  }
  return(
    <header className={`header-area ${props.story ? props.story.content.component : ''}`}>
    <div className="navbar-area">
      <div className="container relative">
        <div className="row">
          <div className="w-full">
            <nav className="flex items-center justify-between navbar navbar-expand-lg">
              <a className="mr-4 navbar-brand" href="/">
                <img src="https://a.storyblok.com/f/171382/1436x406/574689ab7a/logo-white.png" width="190px" alt="Logo" />
              </a>
              <button
                className={`block navbar-toggler focus:outline-none lg:hidden ${navopen == true && 'active'}`}
                type="button"
                data-toggle="collapse"
                data-target="#navbarOne"
                aria-controls="navbarOne"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={navOpen}
              >
                <span className="toggler-icon" />
                <span className="toggler-icon" />
                <span className="toggler-icon" />
              </button>
              <div
                className={`absolute left-0 z-20 hidden w-full px-5 py-3 duration-300 bg-white shadow lg:w-auto collapse navbar-collapse lg:block top-100 mt-full lg:static lg:bg-transparent lg:shadow-none ${navopen == true && 'show'}`}
                id="navbarOne"
              >
                <ul
                  id="nav"
                  className="items-center content-start mr-auto lg:justify-end navbar-nav lg:flex"
                >
                  <li className="nav-item">
                    <a className="page-scroll hover:text-[#fd484b]" href="/about-us">
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="/services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="/portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="/blog">
                      Blog
                    </a>
                  </li>
                  
                 
                </ul>
              </div>{" "}
              {/* navbar collapse */}
              <div className="absolute right-0 hidden mt-2 mr-24 navbar-btn sm:inline-block lg:mt-0 lg:static lg:mr-0">
                <a
                  className="main-btn gradient-btn"
                  data-scroll-nav={0}
                  href="/contact-us"
                >
                  Contact Us
                </a>
              </div>
            </nav>{" "}
            {/* navbar */}
          </div>
        </div>{" "}
        {/* row */}
      </div>{" "}
      {/* container */}
    </div>{" "}
    {/* navbar area */}
  
  </header>
  )
}

export default Header;
