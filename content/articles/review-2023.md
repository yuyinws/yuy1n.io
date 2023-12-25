---
pageName: articles
layout: article
title: 我的2023年开源总结
date: 2023-12-25
draft: true

ogImage:
    title: "Hi, I am Alpine."
    cover: /alpine-0.png
---

## GitHub 2023

<figure>
<img src="/articles/github_2023.png" img-light rounded-lg>
<img src="/articles/github_2023_dark.png" img-dark rounded-lg>
</figure>

今年是在GitHub上贡献最多的一年了，超过了1000.其中有一些是个人项目，也有一些给开源项目的PR，下面来逐个盘点一下：

## Steam Card

[![steam-card](https://opengraph.githubassets.com/58c5f3a068d9c70b87d2eacbab2b726f29aae262f1dd9bb98120cc1657ad3e6e/yuyinws/steam-card)](https://github.com/yuyinws/steam-card)

启动于去年的一个项目，也是我第一个比较正式的项目，在今年用[Nuxt UI](https://ui.nuxt.com/)对其进行了重构，并且加上了多账户登录的一些功能。Nuxt UI的使用体验还是相当不错的，设计也很精美，比较遗憾的是只能用于Nuxt，而无法用在普通的Vue项目中。官方的[解释](https://github.com/nuxt/ui/issues/187#issuecomment-1552790126)是与Nuxt耦合的太深了，兼容Vue需要耗费大量的精力。不过这可能也是Nuxt团队的一个商业策略吧，吸引更多用户去使用Nuxt，从他们近期推出的[Nuxt UI Pro](https://ui.nuxt.com/pro)也能看出这一点。

这个项目的用户量还是挺大的，在Vercel上经常会跑满流量，不得以在Vercel和Netlify之间来回切换部署。后续可能也不会有大的更新了，因为自我感觉能加的功能都做上了，可能后续会把项目中获取Steam个人信息的那部分逻辑抽离出来封装成一个npm包吧。

## Switch Card

[![switch-card](https://opengraph.githubassets.com/edc27d15791d680984f4eb1977ed783b22173ca0f50d2c5954782a9d85ac76c3/yuyinws/switch-card)](https://github.com/yuyinws/switch-card)

从名字就可以看出，是与steam-card类似的项目，用于查询Nineten Switch平台的个人信息。任天堂对第三方开发者实在太不友好了，没有官方的对外接口，现在用的是其他人逆向解析出来的接口，导致有很多的限制，比如港服的账号就查询不出信息。

这个项目还用上了Vercel平台推出的[Serverless数据库](https://vercel.com/docs/storage/vercel-postgres)。体验了一把全栈开发的流程。

比较惊喜的这个项目被[DIYgod](https://github.com/DIYgod)大佬Star了，也和他在GitHub上互相follow了一波。

## Stargazers

[![stargazers](https://opengraph.githubassets.com/ccd9da3be9620b58b2eb08508fc0d2de64df698269efb98f8ff5ff42348448b2/yuyinws/stargazers)](https://github.com/yuyinws/stargazers)

这是一个用于查看GitHub用户Star列表的项目，为此还专门注册了一个域名[stargazers.dev](https://stargazers.dev/)。但最终还是没有获取太好的社区反馈，可能这个需求一开始就是个伪需求，毕竟我自己也没有怎么使用这个项目。

值得一提的是，这是我第一个使用和体验Next.JS以及React生态的项目，不得不说React的生态真的比Vue丰富不少，选择NextJS开发的原因就是因为眼馋[shadcn](https://ui.shadcn.com/)好久了。但是从DX这一方面来说个人更倾向于Vue。最近Vue生态也出现了[radix-vue](https://github.com/radix-vue/radix-vue)以及[shadcn-vue](https://github.com/radix-vue/shadcn-vue)，相信Vue的生态也会越来越丰富。

## vscode-array-index

## blog

## unplugin

## nrun

## gitrees
