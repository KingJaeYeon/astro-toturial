import rss, { pagesGlobToRssItems } from "@astrojs/rss";

// Really Simple Syndication, 매우 간단한 배급으로 부르거나 Rich Site Summary, 풍부한 사이트 요약 정보로 부르기도 한다.
export async function GET(context) {
  return rss({
    title: "Astro Learner | Blog",
    description: "My journey learning Astro",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
