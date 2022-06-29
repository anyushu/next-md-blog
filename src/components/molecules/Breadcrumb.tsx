import Link from 'next/link'

export type BreadcrumbPorps = {
  links?: {
    pageTitle: string
    pageUrl: string
  }[]
}

const Breadcrumb = ({ links }: BreadcrumbPorps) => {
  if (!links) {
    return <></>
  }

  return (
    <ol
      id="breadcrumb"
      className="w-full space-x-2 overflow-x-auto whitespace-nowrap py-2 text-sm md:py-0 md:text-center"
    >
      <li className="inline-block">
        <Link href={process.env.NEXT_PUBLIC_SITE_URL || ''}>
          <a>HOME</a>
        </Link>
      </li>
      {links.map(({ pageTitle, pageUrl }) => {
        return (
          <li key={pageUrl} className="inline-block">
            <span className="mr-2">{`>`}</span>
            <Link href={pageUrl}>
              <a>{pageTitle}</a>
            </Link>
          </li>
        )
      })}
    </ol>
  )
}

export default Breadcrumb
