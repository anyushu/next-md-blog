import { Twemoji } from 'react-emoji-render'

import Heading from '@/components/atoms/Heading'

export type PostHeaderPorps = {
  title: string
  publishDate: string
  thumbnail?: string
}

const PostHeader = ({ title, publishDate, thumbnail }: PostHeaderPorps) => {
  return (
    <>
      <figure className="mb-12">
        <Twemoji
          className="block w-16 h-16 my-0 mx-auto drop-shadow"
          onlyEmojiClassName="twemoji"
          svg
          text={thumbnail || '☕'}
        />
      </figure>
      <div id="post-title" className="mb-6">
        <Heading h={2} className="text-center">
          {title}
        </Heading>
      </div>
      <div className="flex justify-center items-center">
        <time dateTime={publishDate}>
          <span className="mr-2">Published</span>
          <span>{new Date(publishDate).toDateString()}</span>
        </time>
      </div>
      <hr className="mx-auto mt-12 max-w-xs border-neutral-focus" />
    </>
  )
}

export default PostHeader
