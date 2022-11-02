---
title: "Next.js x microCMSで作るJamstackなブログサイト"
description: "Next.js x microCMSで作るJamstackなブログサイト"
date: "2022-02-10"
thumbnail: "🤖"
---

つい最近まではWordPressがCMSの覇権を圧倒的に握っていた感じはありましたが、最近はいろんな手法があって勉強になります。

当サイトの[Anyushu Blog](https://anyushu.com/)は[microCMS](https://microcms.io/)を使用しフロントはNext.jsで制作しているJamstackなブログです。

このサイトの[GitHubリポジトリ](https://github.com/anyushu/microCMS-blog-nextjs-ts)。

## Jamstackってなに？

> JavaScript、API、Markup（静的サイトジェネレータで生成）の略です。

なので事前に投稿情報をAPIで取得し静的なHTMLを生成（SG）するので、特徴としてはサーバーサイドの処理が基本的に発生しないのでとても高速になります。

## なぜNext.jsにしたのか

とても個人的な理由です。

前提としてReactについて少し経験があったので、Next.jsとGatsby.jsの2択でした。

あとインフラの知見が乏しいのでVercelに任せる。なので「恩恵を最大限に受けるのはNext.jsかな？」といった感じです。

## 使用した技術

- Next.js
  - TypeScript
  - Tailwind CSS
- microCMS
  - microcms-js-sdk
- Vercel

## Next.js x microCMS で作る Jamstack なブログサイト

手順を大まかに書いていきます。

### 1. 事前準備

1. microCMSの登録（[マニュアル](https://document.microcms.io/manual/getting-started)）
2. Next.jsプロジェクトの作成（自作の[ボイラープレート](https://github.com/anyushu/next-ts-boilerplate)ではじめました）

### 2. microCMSのAPIスキーマ設定

当サイトの場合ですが、内容は下記のようになっています。

```json
{
  "apiFields": [
    {
      "fieldId": "title",
      "name": "タイトル",
      "kind": "text",
      "required": true,
      "isUnique": false
    },
    {
      "fieldId": "thumbnail",
      "name": "アイキャッチ",
      "kind": "text",
      "isUnique": false
    },
    {
      "fieldId": "category",
      "name": "カテゴリー",
      "kind": "select",
      "required": true,
      "selectItems": [
        {
          "value": "others"
        },
        {
          "value": "tech"
        },
        {
          "value": "idea"
        },
        {
          "value": "column"
        }
      ],
      "multipleSelect": false
    },
    {
      "fieldId": "content",
      "name": "投稿内容",
      "kind": "richEditor",
      "required": true
    },
    {
      "fieldId": "metaRobots",
      "name": "noindex",
      "kind": "boolean",
      "description": "チェックすると`noindex`にります"
    },
    {
      "fieldId": "metaDescription",
      "name": "ディスクリプション",
      "kind": "textArea"
    }
  ]
}
```

### 3. 必要なパッケージのインストール

- microcms-js-sdk：microCMSのSDK（[ドキュメント](https://document.microcms.io/tutorial/next/next-top)）
- microcms-typescript：APIスキーマから型生成（参考サイト：[Zenn記事](https://zenn.dev/sora_kumo/articles/2876c8f98eca56)）

```bash
yarn add microcms-js-sdk
yarn add -D microcms-typescript
```

### 4. microcms-js-sdkを使い記事の取得まで

### clientの初期化

```typescript
import { createClient } from 'microcms-js-sdk'

export const microcmsClient = createClient({
  serviceDomain: process.env.MICRO_CMS_SERVICE_DOMAIN || '',
  apiKey: process.env.MICRO_CMS_API_KEY || '',
})
```

### 記事取得用の関数

```typescript
import type { MicroCMSListResponse, MicroCMSQueries } from 'microcms-js-sdk'
import { microcmsClient } from 'libs/microcms/api-client'
import type { blog } from 'types/cms-types'

export const END_POINT = 'blog'

/**
 * ブログ一覧の取得
 */
export const getBlogList = (limit?: number, offset?: number, keyword?: string) => {
  const queries: MicroCMSQueries = {
    limit: limit,
    offset: offset,
    q: keyword,
    orders: '-publishedAt',
  }

  return microcmsClient.getList<blog>({
    endpoint: END_POINT,
    queries: queries,
  })
}

/**
 * ブログ詳細の取得
 */
export const getBlog = (slug: string) => {
  return microcmsClient.get<blog>({
    endpoint: END_POINT,
    contentId: slug,
  })
}
```

### 5. 記事を表示

### 記事一覧

```typescript
import type { InferGetStaticPropsType, NextPage } from 'next'
import { getBlogList } from 'libs/microcms/get-blog'

type IndexProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogIndex: NextPage<IndexProps> = ({ blogs }) => {
  return (
    <>
     {/* 記事一覧表示 */}
    </>
  )
}

export default BlogIndex

export const getStaticProps = async () => {
  const data = await getBlogList(12)
  return {
    props: {
      blogs: data,
    },
  }
}
```

### 記事詳細

```typescript
import type { GetStaticPropsContext, InferGetStaticPropsType, NextPage } from 'next'
import { getBlogList, getBlog } from 'libs/microcms/get-blog'

type BlogPostProps = InferGetStaticPropsType<typeof getStaticProps>

const BlogPost: NextPage<BlogPostProps> = ({ blog }) => {
  return (
    <>
     {/* 記事詳細表示 */}
    </>
  )
}

export default BlogPost

export const getStaticPaths = async () => {
  const allPage = await getBlogList(9999)
  const paths = allPage.contents.map((blog) => ({
    params: {
      slug: blog.id,
    },
  }))
  return { paths, fallback: false }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext<{ slug: string }>) => {
  const data = await getBlog(params?.slug || '')
  return {
    props: {
      blog: data,
    },
  }
}
```

## 参考にさせていただいたサイト

- [microCMS + Next.jsでJamstackブログを作ってみよう](https://blog.microcms.io/microcms-next-jamstack-blog/)
- [MicroCMSのAPIをTypeScriptで型カッチリに実装する](https://zenn.dev/sora_kumo/articles/2876c8f98eca56)
- [Jamstackとは？ | 株式会社ピクセルグリッド](https://www.pxgrid.com/jamstack/)
