import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
import { useEffect } from "react";
import { render } from "storyblok-rich-text-react-renderer";
const FormContact = ({ blok }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src='//js-eu1.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
        // @TS-ignore
        if (window.hbspt) {
            // @TS-ignore
            window.hbspt.forms.create({
                portalId: '26169725',
                formId: "31d52706-a5a7-4304-b23d-37a7e0e95556",
                target: '#hubspotForm',
            })
        }
    });
}, []);
return (
    <div id="contactForm" className='pt-10 px-4 md:px-20'>
        <div className="container">
            <div className="row">
              <div className="w-full md:w-1/2 px-5">
                <div className="pb-8 section-title">
                  <div className="line" />
                  <h3 className="title mb-4">
                    {blok.ttitle}
                  </h3>
                  {render(blok.description)}
                </div>
                </div>
                <div className="w-full md:w-1/2 pt-6">
                    <div id="hubspotForm"></div>
                </div>
            </div>
        </div>
        
        
    </div>
);
};

export default FormContact;
