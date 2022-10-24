import Head from "next/head";
import { Partytown } from '@builder.io/partytown/react';
import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story }) {
  story = useStoryblokState(story);
  return (
    <div className="w-full">
      <Head>
        <title>{story.content.seo.title}</title>
        <meta property="og:site_name" content={story.content.seo.title} />
        <meta property="og:title" content={story.content.seo.title} />
        <meta property="og:description" content={story.content.seo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content={story.content.seo.title} />
        <meta name="twitter:description" content={story.content.seo.description} />
        <meta name="twitter:image" content="" />
        <meta name="twitter:url" content="accelerance.tech" />
        <meta name="twitter:domain" content="accelerance.tech" />
        <meta name="twitter:card" content="summary" />
        <meta name="description" content={story.content.seo.description} />
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/particlesjs/2.2.3/particles.min.js" integrity="sha512-jq8sZI0I9Og0nnZ+CfJRnUzNSDKxr/5Bvha5bn7AHzTnRyxUfpUArMzfH++mwE/hb2efOo1gCAgI+1RMzf8F7g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script> */}
        <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet" />
      </Head>

      <StoryblokComponent blok={story.content} />
      <script type="text/partytown" id="hs-script-loader" src="//js-eu1.hs-scripts.com/26169725.js" />
    </div>
  );
}

export async function getStaticProps({params, preview = false}) {
  let slug = "home";

  let sbParams = {
    version: "published", // or 'published'
    resolve_relations: ["featured-post.posts", "selected-posts.posts"],
  };
  if (preview) {
    sbParams.version = "draft"
    sbParams.cv = Date.now()
  }
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 60,
  };
}
