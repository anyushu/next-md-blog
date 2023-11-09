import { allPages } from 'contentlayer/generated'
import parse from 'html-react-parser'

export const generateStaticParams = async () => allPages.map((page) => ({ slug: page.slugAsParams.split('/') }))

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    return
  }

  return { title: page.title + ' - anyushu', description: page.description }
}

const Page = ({ params }: { params: { slug: string[] } }) => {
  const slug = params?.slug?.join('/')
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    return <></>
  }

  return (
    <section className="mx-auto max-w-screen-md py-8">
      <div className="prose max-w-none dark:prose-invert">
        <h1>{page.title}</h1>
        {parse(page.body.html)}
      </div>
    </section>
  )
}

export default Page
