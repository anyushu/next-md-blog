import { ogpImageUrl } from '@/utils/blog-helper'

/**
 * site title
 */
export const siteTitle = process.env.NEXT_PUBLIC_SITE_NAME || 'site name'

/**
 * next-seo defaultS config
 * @see https://github.com/garmeeh/next-seo#default-seo-configuration
 */
export const defaultSeo = {
  defaultTitle: siteTitle,
  titleTemplate: `%s | ${siteTitle}`,
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    site_name: process.env.NEXT_PUBLIC_SITE_NAME,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    title: siteTitle,
    images: [
      {
        url: ogpImageUrl(),
        width: 1200,
        height: 630,
        alt: process.env.NEXT_PUBLIC_SITE_NAME,
      },
    ],
  },
}
