import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import type { CodeProps } from 'react-markdown/lib/ast-to-react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { TwitterTweetEmbed } from 'react-twitter-embed'
import YouTube from 'react-youtube'
import remarkGfm from 'remark-gfm'

import type { Post } from '@/types/post'

const PostBody = ({ post }: { post: Post }) => {
  return (
    <ReactMarkdown
      className="prose mx-auto max-w-screen-lg mt-24"
      remarkPlugins={[remarkGfm]}
      components={{
        img: CustomImage,
        pre({ ...props }) {
          return <>{props.children}</>
        },
        code: CodeBlock,
      }}
    >
      {post.content}
    </ReactMarkdown>
  )
}

export default PostBody

const CodeBlock = (props: CodeProps) => {
  const match = /language-(\w+)/.exec(props.className || '')

  if (!match) {
    return <></>
  }

  if (match[1] == 'twitter') {
    return (
      <div className="my-5">
        <TwitterTweetEmbed tweetId={String(props.children).replace(/\n$/, '')} />
      </div>
    )
  }

  if (match[1] == 'youtube') {
    return (
      <div className="relative my-5 h-0 w-full pt-[56.25%]">
        <YouTube
          className="absolute top-0 left-0 h-full w-full"
          videoId={String(props.children).replace(/\n$/, '')}
        />
      </div>
    )
  }

  if (match[1] == 'iframe') {
    return (
      <div className="relative my-5 h-0 w-full p-1 pt-[56.25%]">
        <iframe
          className="absolute top-0 left-0 h-full w-full"
          src={String(props.children).replace(/\n$/, '')}
        />
      </div>
    )
  }

  return (
    <pre className="!p-0 !bg-transparent border border-neutral rounded-xl overflow-hidden">
      <SyntaxHighlighter
        style={dracula}
        PreTag="div"
        language={match[1]}
        showLineNumbers={true}
        customStyle={{
          margin: 0,
        }}
      >
        {String(props.children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </pre>
  )
}

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!props.src) {
    return <></>
  }

  if (props.alt) {
    const imageSizeIndex = props.alt.indexOf('?')
    const imageAlt = props.alt.substring(0, imageSizeIndex)
    const imageSizeStr = props.alt.substring(imageSizeIndex + 1)
    const imageWidth = imageSizeStr.substring(
      imageSizeStr.indexOf('w=') + 2,
      imageSizeStr.indexOf('&'),
    )
    const imageHeight = imageSizeStr.substring(imageSizeStr.indexOf('h=') + 2)

    return (
      <Image
        src={props.src}
        alt={imageAlt}
        width={Number(imageWidth)}
        height={Number(imageHeight)}
      />
    )
  }

  return (
    <span className="relative block h-0 w-full pt-[56.25%]">
      <Image src={props.src} alt={props.alt ? props.alt : ''} layout="fill" objectFit="contain" />
    </span>
  )
}
