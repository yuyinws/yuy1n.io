import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE } from '@consts'

interface Context {
  site: string
}

export async function GET(context: Context) {
  const posts = await getCollection('blog')

  const items = [...posts]

  items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime())

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map(item => ({
      title: item.data.title,
      description: item.data.summary,
      pubDate: item.data.date,
      link: item.slug.startsWith('blog')
        ? `/blog/${item.slug}/`
        : `/projects/${item.slug}/`,
    })),
    customData: `
      <follow_challenge>
        <feedId>71464213122076672</feedId>
        <userId>41391488095027200</userId>
      </follow_challenge>
    `,
  })
}
