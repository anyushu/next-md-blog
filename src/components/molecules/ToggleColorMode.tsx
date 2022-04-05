import { useTheme } from 'next-themes'
import { FC } from 'react'
import { Twemoji } from 'react-emoji-render'

const ToggleColorMode: FC = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <Twemoji
        className="block w-5 h-5 text-xl"
        onlyEmojiClassName="twemoji"
        svg
        text={theme === 'dark' ? '🌕' : '🌑'}
      />
    </button>
  )
}

export default ToggleColorMode
