*[English](README.md) ∙ [中文](README-ZH.md)*
# Resume-X

Thanks to ChatGPT for generating Iron Man's resume. The main purpose of the project is to be familiar with the use of Vue + Vite + TailwindCSS.

Resume-X is a dynamic resume generator that can translate resume content from one language to global resume content in 48 languages. It supports theme colors for internet companies such as FANNG and BAT. Applicants can choose different languages and color schemes according to their needs to express respect for the target interview company.

## Features
- Support for multiple languages: By using the VSCode i18n Ally plugin, Resume-X can quickly translate resume content from one language to global resume content. Currently, it supports 48 languages.
- Support for multiple color schemes: Resume-X comes with built-in theme color schemes for internet companies such as FANNG and BAT. Applicants can choose different colors according to their needs to express respect for the target interview company.
- Easy to use: Users only need to add their own resume information to the project, choose the desired language and color scheme, and then generate a global resume.


FANNG: Facebook, Amazon, Netflix, Google, and Microsoft. This is a popular acronym in Silicon Valley, USA, representing five tech giant companies.
BAT: Baidu, Alibaba, and Tencent. This is a popular acronym in China, representing three internet giant companies.


## How to use
1. Clone the project to your local machine:

```
git clone https://github.com/ManfredHu/resume-x
```

2. Install dependencies:

```
npm install
```

3. Edit resume information:
In the src/data/ directory, find the `BasicInfo.ts` or `MainIntroduction.ts` file and edit your own resume information according to the examples in the file.

The multilingual text corresponds to the content in `src/locales/*`, which can be added as needed. `src/locales/en.json` corresponds to English content.

4. Generate resume:
```
npm run build
```

In the project root directory, find the build directory, and the generated resume file is inside.

## Contributors
Resume-X is independently developed by [ManfredHu](https://github.com/ManfredHu), and everyone is welcome to submit issues and pull requests.

## License
Resume-X is licensed under the [MIT License](https://github.com/ManfredHu/resume-x/blob/main/LICENSE) .

## Page Compositions
[FeiShu](https://u4oe1fzgoc.feishu.cn/docx/SBSFd1N20olCmpxjrhAccweBnZx)

## Documentation
- [Vue Doc](https://cn.vuejs.org/guide/quick-start.html#try-vue-online)
- [eslint for Vue](https://eslint.vuejs.org/)
- [ionicons](https://www.npmjs.com/package/ionicons)

## Todo
- [x] icons Support by [ionicons](https://ionic.io/ionicons)
- [x] support dark mode
- [x] i18n, https://zh.m.wikipedia.org/wiki/ISO_639-1
  - [ ] dynamic i18n data load
- [x] support famous IT componys(like FAANG or BAT) colors by Router
- [x] picture preview
