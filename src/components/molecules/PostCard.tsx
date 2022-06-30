import Link from 'next/link'
import { Twemoji } from 'react-emoji-render'
import { Post } from '@/types/post'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <article className="mb-6 md:mb-12">
      <Link href="/posts/[slug]" as={`/posts/${post.slug}`} passHref>
        <a className="transition-all hover:opacity-75">
          {/* thumbnail */}
          <figure className="relative h-0 bg-slate-50 pt-[46.29%]">
            <Twemoji
              className="absolute inset-0 m-auto h-16 w-16 text-7xl"
              onlyEmojiClassName="twemoji"
              svg
              text={post.thumbnail || '☕'}
            />
          </figure>
          <div className="my-6 flex items-center justify-between text-xs tracking-widest">
            {/* created_time */}
            <time dateTime={post.date}>{post.date}</time>
          </div>
          {/* title */}
          <h2 className="text-lg tracking-wider">{post.title}</h2>
        </a>
      </Link>
    </article>
  )
}

export default PostCard
