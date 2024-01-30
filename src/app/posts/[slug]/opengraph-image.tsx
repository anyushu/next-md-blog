import { loadGoogleFont } from '@/lib/font'
import { allPosts } from 'contentlayer/generated'
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = '投稿のOGP画像'
export const size = {
  width: 1200,
  height: 630
}

export const contentType = 'image/png'

const Image = async ({ params }: { params: { slug: string } }) => {
  const slug = params.slug
  const post = allPosts.find((post) => post._raw.flattenedPath === `posts/${slug}`)

  if (!post) {
    return new Response('Not Found', { status: 404 })
  }

  const notoSansArrayBuffer = await loadGoogleFont({
    family: 'Noto Sans JP',
    weight: 700
  })

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <div
          style={{
            padding: '0 96px',
            textAlign: 'center'
          }}
        >
          {post.title}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: 'NotoSansJP',
          data: notoSansArrayBuffer,
          style: 'normal',
          weight: 700
        }
      ]
    }
  )
}

export default Image
