import Link from 'next/link'
import { Twemoji } from 'react-emoji-render'

export type PostCardProps = {
  slug: string
  title: string
  thumbnail?: string
  publishDate: string
}

const PostCard = ({ slug, title, thumbnail, publishDate }: PostCardProps) => {
  return (
    <article className="mb-6 md:mb-12">
      <Link
        href="/posts/[slug]"
        as={`/posts/${slug}`}
        passHref
        className="transition-all hover:opacity-75"
      >
        {/* thumbnail */}
        <figure className="relative h-0 bg-slate-50 pt-[46.29%] overflow-hidden rounded">
          <Twemoji
            className="absolute inset-0 m-auto h-16 w-16 text-7xl"
            onlyEmojiClassName="twemoji"
            svg
            text={thumbnail || '☕'}
          />
        </figure>
        <div className="my-6 flex items-center justify-between text-xs">
          {/* created_time */}
          <time dateTime={publishDate}>{publishDate}</time>
        </div>
        {/* title */}
        <h2 className="text-lg">{title}</h2>
      </Link>
    </article>
  )
}

export default PostCard
