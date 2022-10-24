import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  useStoryblokState,
  getStoryblokApi,
  StoryblokComponent,
} from "@storyblok/react";

export default function Page({ story }) {
  story = useStoryblokState(story);

  return (
    <>
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


      <StoryblokComponent blok={story.content} />
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  let slug = params.slug ? params.slug.join("/") : "home";

  let sbParams = {
    version: "published", // or 'published'
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
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

export async function getStaticPaths() {
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get("cdn/links/");

  let paths = [];
  Object.keys(data.links).forEach((linkKey) => {
    if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home" || data.links[linkKey].slug === "blog/") {
      return;
    }

    const slug = data.links[linkKey].slug;
    let splittedSlug = slug.split("/");

    paths.push({ params: { slug: splittedSlug } });
  });

  return {
    paths: paths,
    fallback: false,
  };
}
