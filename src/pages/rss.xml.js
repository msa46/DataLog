import rss, {pagesGlobToRssItems} from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Datalog - blog',
    description: 'Reports about many random topics',
    site: context.site,
    items: await pagesGlobToRssItems(
      import.meta.glob('./posts/*.{md,mdx}'),
    ),
    stylesheet: './rss/styles.xsl',
    customData: `<language>en-us</language>`,
  });
}