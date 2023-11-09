export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || ''

export const existsGaId = GA_MEASUREMENT_ID !== ''

export const pageview = (path: string) => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: path
    })
  }
}
