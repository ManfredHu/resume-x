*[English](README.md) ∙ [中文](README-ZH.md)*
# Resume-X
Resume-x 是一款动态简历生成项目，它可以将一种语言的简历内容翻译为支持48种语言的全球性简历，并支持 FANNG，BAT 等互联网公司的主题配色。应聘者可以根据自己的需求选择不同的语言和配色方案，以表达对目标面试公司的尊敬。

## 项目特点
- 支持多种语言：通过使用 VSCode 多语言插件 i18n Ally，Resume-x 可以将一种语言的简历内容快速翻译成全球性简历，目前支持48种语言。
- 支持多种配色方案：Resume-x 内置了 FANNG，BAT 等互联网公司的主题配色方案，应聘者可以根据自己的需求选择不同的颜色以表达对目标面试公司的尊敬。
- 简单易用：用户只需要在项目中添加自己的简历信息，选择想要的语言和配色方案，然后就可以生成一份全球性简历了。

FANNG：Facebook、Amazon、Netflix、Google 和 Microsoft。这是在美国硅谷地区较为流行的缩写，指代了五家科技巨头企业。
BAT：Baidu、Alibaba 和 Tencent。这是在中国较为流行的缩写，指代了三家互联网巨头企业。

## 如何使用
1. 克隆项目到本地：
```
git clone https://github.com/ManfredHu/resume-x
```

2. 安装依赖：
```
npm install
```

3. 编辑简历信息：

在 `src/data/` 目录下，找到 `BasicInfo.ts`或`MainIntroduction.ts` 文件，按照文件中的示例编辑自己的简历信息。

多语言文本对应`src/locales/*`下内容，可自行添加。`src/locales/zh-Hans.json`对应简体中文内容

4. 生成简历：
```
npm run build
```

在项目根目录下，找到 build 目录，里面就是生成的简历文件。

## 贡献者
Resume-x 项目由 [ManfredHu](https://github.com/ManfredHu) 独立涉及开发，欢迎大家提交 issues 和 pull requests。

## 开源许可
Resume-x 项目采用 [MIT License](https://github.com/ManfredHu/resume-x/blob/main/LICENSE) 开源许可证。
