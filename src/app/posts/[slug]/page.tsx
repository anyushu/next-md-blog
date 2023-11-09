import { Separator } from '@/components/ui/separator'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)
  return { title: post.title + ' - anyushu' }
}

const Postpage = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) throw new Error(`Post not found for slug: ${params.slug}`)

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
