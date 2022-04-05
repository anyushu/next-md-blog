import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Layout from '@/components/templates/Layout'
import { getAllPosts, getPostBySlug } from '@/libs/post'
import markdownToHtml from '@/utils/markdown-to-html'

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
  const post = getPostBySlug(params?.slug as string, ['slug', 'title', 'date', 'content'])
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
  return (
    <Layout>
      <article>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </Layout>
  )
}

export default Post
