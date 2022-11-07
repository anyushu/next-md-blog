import { ImageResponse } from '@vercel/og'
import type { NextRequest } from 'next/server'

export const config = {
  runtime: 'experimental-edge',
}

const OG = (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url)
    const hasTitle = searchParams.has('title')
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : ''

    return new ImageResponse(
      (
        <div
          style={{
            fontSize: 256,
            background: 'rgb(39, 41, 53)',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <p
            style={{
              textAlign: 'center',
            }}
          >
            {title ? `${title}` : `☕`}
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 600,
      },
    )
  } catch (e: unknown) {
    return new Response('OGP画像の生成に失敗しました', { status: 500 })
  }
}

export default OG
