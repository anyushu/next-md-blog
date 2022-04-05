import { FC } from 'react'
import PostCard from '@/components/molecules/PostCard'
import type { Post } from '@/types/post'

type PostsProps = {
  posts: Post[]
}

const Posts: FC<PostsProps> = ({ posts }) => {
  return (
    <>
      <div id="posts" className="grid gap-8 md:grid-cols-3 md:gap-4">
        {posts.map((post) => {
          return <PostCard key={post.slug} post={post} />
        })}
      </div>

      {/* {pageInfo && (
        <div className="container mx-auto mt-12 max-w-3xl">
          <div className="flex justify-between items-center">
            {pageInfo.offset > 0 && (
              <Link href="/page/[offset]" as={`/page/${pageInfo.offset}`}>
                <a>{'<'} Prev</a>
              </Link>
            )}
            {pageInfo.totalCount / pageInfo.pageLimit > pageInfo.offset + 1 && (
              <Link href="/page/[offset]" as={`/page/${pageInfo.offset + 2}`}>
                <a className="ml-auto">Next {'>'}</a>
              </Link>
            )}
          </div>
        </div>
      )} */}
    </>
  )
}

export default Posts
