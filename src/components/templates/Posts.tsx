import { PostCard } from '@/components/molecules/Post'
import type { Post } from '@/types/post'

type PostsProps = {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <div id="posts" className="grid gap-8 md:grid-cols-3 md:gap-4">
      {posts.map((post) => {
        return (
          <PostCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            publishDate={post.date}
            thumbnail={post.thumbnail}
          />
        )
      })}
    </div>
  )
}

export default Posts
