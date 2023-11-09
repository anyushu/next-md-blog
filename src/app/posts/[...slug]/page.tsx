import { Separator } from '@/components/ui/separator'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post.slugAsParams.split('/') }))

export const generateMetadata = ({ params }: { params: { slug: string[] } }) => {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    return
  }

  return { title: post.title + ' - anyushu', description: post.description }
}

const Postpage = ({ params }: { params: { slug: string[] } }) => {
  const slug = params?.slug?.join('/')
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    return <></>
  }

  return (
    <article className="mx-auto max-w-screen-md py-8">
      <div className="text-center">
        <p className="mb-6 text-3xl">{post.emoji}</p>
        <time dateTime={post.date} className="mb-2 text-xs text-muted-foreground">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <Separator className="my-12" />
      <div className="prose max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </article>
  )
}

export default Postpage