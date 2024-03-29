import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { allPosts } from 'contentlayer/generated'

const Home = () => {
  const posts = [...allPosts].sort((a: { date: string }, b: { date: string }) =>
    compareDesc(parseISO(a.date), parseISO(b.date))
  )
  return (
    <>
      <section className="py-12">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight md:text-center lg:text-5xl">
          Hi there, I am a web developer.
        </h1>
        <div className="mt-6 flex h-5 items-center space-x-2 text-sm md:justify-center [&>span]:text-muted-foreground">
          <span>PHPer</span>
          <Separator orientation="vertical" />
          <span>Angler</span>
          <Separator orientation="vertical" />
          <span>Football Supporter</span>
        </div>
      </section>
      <div className="mx-auto max-w-screen-lg">
        <div className="mt-12 grid gap-3 md:grid-cols-3">
          {posts.map((post) => (
            <Link key={post._id} href={`${post.slug}`}>
              <Card className="transition-all hover:shadow-md">
                <CardContent>
                  <div className="py-6 text-2xl leading-none tracking-tight">{post.emoji}</div>
                  <p className="text-lg">{post.title}</p>
                </CardContent>
                <CardFooter>
                  <time className="text-sm text-muted-foreground">{format(parseISO(post.date), 'LLLL d, yyyy')}</time>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
export default Home
