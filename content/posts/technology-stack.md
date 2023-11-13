---
title: "Next.js 14 + Contentlayerでブログサイトを作成した"
date: "2023-11-10"
description: "Next.js+Contentlayer+shadcn/uiでブログサイトを作成した"
emoji: "💻"
---

あまりアウトプットをすることがないので、良くないなと思い、このブログサイトを作成しました。
せっかくなので、このブログサイトをどうやって作っていったかをまとめておきます。

## 技術スタックについて

### Next.js

フレームワークには[Next.js](https://nextjs.org/)を使用しています。理由は、人気のフレームワークであること、仕事でも使っているからです。

ちょうど思い立った時に[Next.js 14](https://nextjs.org/blog/next-14)がリリースされていたので、新しいものを使ってみたかったというのもあります。

### Contentlayer

ブログサイトなので、記事を管理する必要があります。

候補として

- Notion
- CMS
  - wordpress
  - microCMS
  - etc...

があったのですが、なんだかんだ別サービスを使うのは面倒なので、リポジトリ内でmdファイルの管理でいいやと思いました。

mdファイル管理には[Contentlayer](https://contentlayer.dev/)を使用しています。これは、mdファイルを検証して、型を生成しJSONデータに変換してくれるライブラリです。

これにより、mdファイルを管理するためのAPIなどを自分で作る必要がなくなります。楽ですね。

### shadcn/ui

UIコンポーネントライブラリには、[shadcn/ui](https://ui.shadcn.com/)を使用しています。これは、Radix UIとTailwind CSSをベースにしたUIコンポーネントライブラリです。

公式では、「コンポーネントライブラリではなく再利用可能なコレクションです」と謳っています。

>This is NOT a component library. It's a collection of re-usable components that you can copy and paste into your apps.

MUIやChakraUIみたいにデザインされているわけではなく、あくまで再利用しやすいコンポーネントを出力してくれるので、カスタマイズしやすいです。

## ディレクトリ構成

```text
- content
  - posts // 記事のmdファイル
  - pages // ページのmdファイル
- src
  - app
  - components
    - functional // 見た目がないコンポーネント
    - ui // 最小単位のUIパーツ
  - lib
  - styles
  - types
```

[App Router](https://nextjs.org/docs/app)でルーティングを管理しています。Next.js 14からは、AppRouterが推奨されているようなので、素直に使っています。

`/content` ディレクトリには、mdファイルを配置しています。記事用の `/posts` ディレクトリと、ページ用の `/pages` ディレクトリに分けています。

## 開発の流れ

特に変わったことはしていなく、公式のドキュメントに沿って開発していきました。

### Next.jsのインストールと設定

[Next.js - create-next-app](https://nextjs.org/docs/app/api-reference/create-next-app)

### Contentlayerのインストールと設定

[Contentlayer - Getting Started](https://contentlayer.dev/docs/getting-started-cddd76b7)

### shadcn/uiのインストールと設定

[shadcn/ui - installation > Next.js](https://ui.shadcn.com/docs/installation/next)

## 最後に

このサイトのソースコードは、[GitHub](https://github.com/anyushu/next-md-blog)に公開しています。もし、気になる点があれば、IssueやPull Requestを送っていただけると嬉しいです 🙇‍♂️
