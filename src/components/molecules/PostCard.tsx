import Link from 'next/link'
import { FC } from 'react'
import { Twemoji } from 'react-emoji-render'
import { Post } from '@/types/post'

const PostCard: FC<{ post: Post }> = ({ post }) => {
  return (
    <article className="mb-6 md:mb-12">
      <Link href="/posts/[slug]" as={`/posts/${post.slug}`} passHref>
        <a className="hover:opacity-75 transition-all">
          {/* thumbnail */}
          <figure className="relative pt-[46.29%] h-0 bg-gray-100">
            <Twemoji
              className="absolute inset-0 m-auto w-16 h-16 text-7xl"
              onlyEmojiClassName="twemoji"
              svg
              text={post.thumbnail || '☕'}
            />
          </figure>
          <div className="flex justify-between items-center my-6 text-xs tracking-widest text-gray-500">
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
