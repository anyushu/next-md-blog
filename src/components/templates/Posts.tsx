import { FC } from 'react'
import PostCard from '@/components/molecules/PostCard'
import type { Post } from '@/types/post'

type PostsProps = {
  posts: Post[]
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <div id="posts" className="grid gap-8 md:grid-cols-3 md:gap-4">
      {posts.map((post) => {
        return <PostCard key={post.slug} post={post} />
      })}
    </div>
  )
}

export default Posts
