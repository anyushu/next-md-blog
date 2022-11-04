import Heading from '@/components/atoms/Heading'

export type PostHeaderPorps = {
  title: string
  publishDate: string
}

const PostHeader = ({ title, publishDate }: PostHeaderPorps) => {
  return (
    <>
      {/* title */}
      <div id="post-title" className="mb-6">
        <Heading h={2} className="leading-relaxed tracking-wider">
          {title}
        </Heading>
      </div>
      <div className="flex items-center">
        {/* date */}
        <span className="mr-2">✏️</span>
        <time dateTime={publishDate}>{publishDate}</time>
      </div>
    </>
  )
}

export default PostHeader
