import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'

const Home = () => {
  const posts = [...allPosts].sort((a: { date: string | number | Date }, b: { date: string | number | Date }) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  return (
    <>
      <section className="py-6">
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
            <Link key={post._id} href={`${post.slug}`} className="transition-all hover:bg-transparent">
              <Card className="border-0 bg-secondary hover:bg-secondary/80">
                <CardHeader>
                  <CardTitle>{post.emoji}</CardTitle>
                </CardHeader>
                <CardContent>
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
