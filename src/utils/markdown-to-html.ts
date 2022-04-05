import { remark } from 'remark'
import html from 'remark-html'

/**
 * Markdown を解析して HTML にして返す
 * @param {string} markdown
 * @returns {Promise<string>} HTML
 */
const markdownToHtml = async (markdown: string): Promise<string> => {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export default markdownToHtml
