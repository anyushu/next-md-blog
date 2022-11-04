/**
 * site title
 */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
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
    site_name: siteTitle,
    url: siteUrl,
    title: siteTitle,
    images: [
      {
        url: `${siteUrl}/api/og`,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
}
