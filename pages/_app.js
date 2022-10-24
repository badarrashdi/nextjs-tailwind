import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Layout from "../components/shared/Layout";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import HeroBanner from "../components/HeroBanner";
import Clients from "../components/Clients";
import Services from "../components/Services";
import TwoColImage from "../components/TwoColImage";
import FeaturedPost from "../components/FeaturedPost";
import Testimonials from "../components/Testimonials";
import HeroInner from "../components/HeroInner";
import TwoColContent from "../components/TwoColContent";
import GricColumn from "../components/GricColumn";
import BlogList from "../components/BlogList";
import Blog from "../components/Blog";
import FormContact from "../components/FormContact";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero: HeroBanner,
  clients: Clients,
  services: Services,
  'two-col-image':TwoColImage,
  'featured-post': FeaturedPost,
  testimonials: Testimonials,
  'hero-inner': HeroInner,
  'two-col-content': TwoColContent,
  'grid-content': GricColumn,
  'blog-list': BlogList,
  blog: Blog,
  'contact-form': FormContact,
};

storyblokInit({
  accessToken: "2zLiWnWR77tuopTwHWNFKAtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return (
    <Layout props={pageProps}>
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer', 'GTM-MDR39N3');
        `,
        }}
      />
      <Component {...pageProps} />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDR39N3"
      height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
  </Layout>
  )
}

export default MyApp;
