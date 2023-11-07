import { allPosts } from 'contentlayer/generated'
import { compareDesc } from 'date-fns'

const Home = () => {
  const posts = allPosts.sort((a: { date: string | number | Date }, b: { date: string | number | Date }) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}
export default Home
