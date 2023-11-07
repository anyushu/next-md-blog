import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'
import Link from 'next/link'

const Home = () => {
  const posts = allPosts.sort((a: { date: string | number | Date }, b: { date: string | number | Date }) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`${post.url}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Home
