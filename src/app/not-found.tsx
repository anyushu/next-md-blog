import Link from 'next/link'

import { Button } from '@/components/ui/button'

export const generateMetadata = () => {
  return { title: '見つかりませんでした - anyushu' }
}

const NotFound = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-screen-lg text-center">
        <h1 className="mb-12 text-8xl font-bold tracking-widest">404</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          このページはすでに削除されているか、URLが間違っている可能性があります。
        </p>
        <Button asChild>
          <Link href="/">トップへ戻る</Link>
        </Button>
      </div>
    </section>
  )
}

export default NotFound
