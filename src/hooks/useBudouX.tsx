import { loadDefaultJapaneseParser } from 'budoux'
const parser = loadDefaultJapaneseParser()

export const useBudouX = () => {
  const newLineOfText = (text: string) => {
    return parser.parse(text).map((s) => (
      <span key={s} className="inline-block">
        {s}
      </span>
    ))
  }
  return {
    newLineOfText,
  }
}
