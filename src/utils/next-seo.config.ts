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
}
