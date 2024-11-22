import rss from '@astrojs/rss';

export async function GET(context) {
  return rss({
    title: 'Wanderlust - Travel Photography Blog',
    description: 'Discover the world\'s most Instagram-worthy destinations and expert travel guides.',
    site: context.site,
    items: [
      {
        title: 'Hidden Gems of Paris',
        description: 'Discover Instagram-worthy spots beyond the Eiffel Tower',
        link: '/instagram-destinations/hidden-gems/paris',
        pubDate: new Date('2024-01-15'),
      },
      {
        title: 'Tokyo After Dark',
        description: 'A photographer\'s guide to capturing the neon city',
        link: '/travel-guides/city/tokyo',
        pubDate: new Date('2024-01-14'),
      },
      // More items will be added as content is created
    ],
  });
}