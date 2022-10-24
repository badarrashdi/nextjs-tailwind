import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Page = ({ blok, blogs }) => (
  <main {...storyblokEditable(blok)}>
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} blogs={blogs} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
