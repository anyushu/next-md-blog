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
    <div className="breadcrumbs flex justify-center py-2 md:py-0 text-sm">
      <ul>
        <li>
          <Link href={process.env.NEXT_PUBLIC_SITE_URL || ''}>HOME</Link>
        </li>
        {links.map(({ pageTitle, pageUrl }) => {
          return (
            <li key={pageUrl}>
              <Link href={pageUrl}>{pageTitle}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Breadcrumb
