---
title: "個人的によく使う、Tailwind CSS のスニペット集"
description: "個人的によく使う、Tailwind CSS のスニペットをまとめました。随時更新してきます"
date: "2022-04-07"
thumbnail: "🌬️"
---

[Tailwind CSS](https://tailwindcss.com/)って便利ですよね。最近はTailwind CSSしか使ってないです笑

ユーティリティファーストな設計ですので、汎用的なクラスがたくさんあります。なのでUIをコーディングするときに、たくさんのクラスを書くことがあると思います。

違うプロダクトなのに同じこと何回も書いているなと思ったので、よく個人的に使っているものをスニペット集としてまとめてみます。

## ボタン系のスニペット

![ボタン系のスニペット?w=1338&h=162](/images/posts/tailwindcss-snippet/tailwind-css-buttons.png)

```html
<button
  type="button"
  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
>
  四角いやつ
</button>
<button
  type="button"
  class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
>
  四角いやつ
</button>
<button
  type="button"
  class="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
>
  丸いやつ
</button>
<button
  type="button"
  class="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
>
  丸いやつ
</button>
<button
  type="button"
  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
>
  アイコン付きのやつ
  <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clip-rule="evenodd"
    ></path>
  </svg>
</button>
```
