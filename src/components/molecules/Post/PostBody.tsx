import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import type { CodeProps } from 'react-markdown/lib/ast-to-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import remarkGfm from 'remark-gfm'

const PostBody = ({ body }: { body: string }) => {
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
      {body}
    </ReactMarkdown>
  )
}

export default PostBody

const CodeBlock = (props: CodeProps) => {
  const match = /language-(\w+)/.exec(props.className || '')

  if (!match) {
    return <></>
  }

  return (
    <div className="border border-neutral-focus">
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        showLineNumbers={true}
        customStyle={{ margin: 0, borderRadius: 0 }}
      >
        {String(props.children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    </div>
  )
}

const CustomImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (!props.src) {
    return <></>
  }
  return <Image src={props.src} alt={props.alt ? props.alt : ''} />
}
