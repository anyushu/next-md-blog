import { FC } from 'react'
import Heading from '@/components/atoms/Heading'
import { Post } from '@/types/post'

const PostHeader: FC<{ post: Post }> = ({ post }) => {
  return (
    <>
      {/* title */}
      <div id="post-title" className="mb-6">
        <Heading h={2} className="tracking-wider leading-relaxed">
          {post.title}
        </Heading>
      </div>
      <div className="flex items-center">
        {/* date */}
        <time className="ml-6 text-gray-500" dateTime={post.date}>
          {post.date}
        </time>
      </div>
    </>
  )
}

export default PostHeader
