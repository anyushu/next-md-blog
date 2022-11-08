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
        className="block text-center bg-neutral rounded-3xl p-6 transition-all hover:opacity-75 hover:!text-neutral-content"
      >
        <Twemoji
          className="block h-16 w-16 m-auto"
          onlyEmojiClassName="twemoji"
          svg
          text={thumbnail || '☕'}
        />
        <h2 className="md:text-lg mt-6">{title}</h2>
        <time className="block text-sm mt-3" dateTime={publishDate}>
          {new Date(publishDate).toDateString()}
        </time>
      </Link>
    </article>
  )
}

export default PostCard
