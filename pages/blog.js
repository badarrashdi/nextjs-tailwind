import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Home({ story, blogs }) {
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
        <link href="https://cdn.lineicons.com/2.0/LineIcons.css" rel="stylesheet" />
      </Head>

      <StoryblokComponent blok={story.content} blogs={blogs} />
    </div>
  );
}

export async function getStaticProps({preview = false}) {
  let slug = "blog";

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

  let posts = await fetch("https://api.storyblok.com/v1/cdn/stories/?starts_with=blog/&is_startpage=false&token=2zLiWnWR77tuopTwHWNFKAtt")
  const post = await posts.json();

  return {
    props: {
      story: data ? data.story : false,
      blogs: post,
      key: data ? data.story.id : false,
    },
    revalidate: 60,
  };
}
