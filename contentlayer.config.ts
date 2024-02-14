import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'
import rehypePrism from 'rehype-prism-plus'
import remarkGfm from 'remark-gfm'

export const Page = defineDocumentType(() => ({
  name: 'Page',
  filePathPattern: `pages/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/')
    }
  }
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
    emoji: { type: 'string', required: true }
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    }
  }
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Post, Page],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeAccessibleEmojis,
      // @ts-expect-error rehypePrism is not typed
      rehypePrism
    ]
  }
})
