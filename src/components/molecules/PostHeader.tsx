import Heading from '@/components/atoms/Heading'
import { Post } from '@/types/post'

const PostHeader = ({ post }: { post: Post }) => {
  return (
    <>
      {/* title */}
      <div id="post-title" className="mb-6">
        <Heading h={2} className="leading-relaxed tracking-wider">
          {post.title}
        </Heading>
      </div>
      <div className="flex items-center">
        {/* date */}
        <span className="mr-2">✏️</span>
        <time dateTime={post.date}>{post.date}</time>
      </div>
    </>
  )
}

export default PostHeader
