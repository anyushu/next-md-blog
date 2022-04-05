import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { Twemoji } from 'react-emoji-render'
import {
  FacebookShareButton,
  HatenaShareButton,
  PocketShareButton,
  TwitterShareButton,
} from 'react-share'
import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import PostHeader from '@/components/molecules/PostHeader'
import { getAllPosts, getPostBySlug } from '@/libs/post'
import markdownToHtml from '@/utils/markdown-to-html'
import { siteTitle } from '@/utils/next-seo.config'

type Props = InferGetStaticPropsType<typeof getStaticProps>

/**
 * get post slug
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

/**
 * get post content
 */
export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const post = getPostBySlug(params?.slug as string, [
    'slug',
    'title',
    'date',
    'thumbnail',
    'content',
  ])
  const content = await markdownToHtml(post.content)
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const postTitle = post.title + ' | ' + siteTitle
  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`

  return (
    <Container>
      <article>
        <PostHeader post={post} />
        <div
          id="news-content"
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className="mt-12 w-full max-w-none tracking-wider leading-relaxed prose prose-slate dark:prose-invert md:px-24 md:mt-24 lg:prose-lg md:prose-md"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
      <div className="mt-16 text-center md:mt-24">
        <p className="flex justify-center items-center mb-6">
          <Twemoji text="📎" />
          <span className="ml-1 text-lg tracking-widest">Social Share</span>
        </p>
        <div className="flex flex-wrap justify-center items-center">
          <TwitterShareButton url={postUrl} className="mx-3">
            <span className="hover:underline">Twitter</span>
          </TwitterShareButton>
          <HatenaShareButton url={postUrl} className="mx-3">
            <span className="hover:underline">Hatena</span>
          </HatenaShareButton>
          <FacebookShareButton title={postTitle} url={postUrl} className="mx-3">
            <span className="hover:underline">Facebook</span>
          </FacebookShareButton>
          <PocketShareButton url={postUrl} className="mx-3">
            <span className="hover:underline">Pocket</span>
          </PocketShareButton>
        </div>
      </div>
      <div className="mt-16 tracking-widest text-center md:mt-24">
        <Button href="/">Back Home</Button>
      </div>
    </Container>
  )
}

export default Post
