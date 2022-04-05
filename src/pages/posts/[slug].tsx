import { NextPage, InferGetStaticPropsType, GetStaticPropsContext } from 'next'
import { NextSeo, ArticleJsonLd } from 'next-seo'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import Button from '@/components/atoms/Button'
import Container from '@/components/atoms/Container'
import CustomImage from '@/components/molecules/CustomImage'
import PostHeader from '@/components/molecules/PostHeader'
import SocialShare from '@/components/organisms/SocialShare'
import { getAllPosts, getPostBySlug } from '@/libs/post'
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
    'content',
    'title',
    'description',
    'date',
    'thumbnail',
  ])
  return {
    props: {
      post: {
        ...post,
      },
    },
  }
}

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  const postUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${post.slug}`
  const postTitle = post.title + ' | ' + siteTitle

  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          url: postUrl,
          title: postTitle,
          description: post.description,
          site_name: process.env.NEXT_PUBLIC_SITE_NAME,
        }}
      />
      <ArticleJsonLd
        type="Blog"
        url={postUrl}
        title={postTitle}
        images={[``]}
        datePublished={post.date}
        dateModified={post.date}
        authorName={['Anyushu']}
        publisherName="Anyushu"
        description={post.description || ''}
      />
      <Container>
        <article>
          <PostHeader post={post} />
          <ReactMarkdown
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className="mt-12 w-full max-w-none tracking-wider leading-relaxed prose prose-slate dark:prose-invert md:px-24 md:mt-24 lg:prose-lg md:prose-md"
            remarkPlugins={[remarkGfm]}
            components={{
              img: CustomImage,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
        <div className="mt-16 md:mt-24">
          <SocialShare postUrl={postUrl} postTitle={postTitle} />
        </div>
        <div className="mt-16 tracking-widest text-center md:mt-24">
          <Button href="/">Back Home</Button>
        </div>
      </Container>
    </>
  )
}

export default Post
