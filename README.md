# 风骚律师逐集英语学习册

网站：https://chuanwang66.github.io/better-call-saul-english/

V3（2026-10-11）覆盖六季 63 集：每集 5–15 个单词与词组，共 571 条逐集记录、306 个独立词条（229 个单词、77 个词组或术语）、918 个原创双语例句。
全部 229 个关键词含美式 IPA；全部 306 个词条含词性及原创英文释义。变形词补充原形，特定集数的多义词按本集用法说明。
每集有一篇英文梗概，均不超过 200 词，包含剧透。筛选侧重中高级惯用表达及法律、商务、调查语境中的关键词，难度判断不是正式 CEFR 评级。

## 功能

- 按季、关键词或词组筛选，搜索词汇、英文释义、中文、例句和剧情。
- 隐藏中文、练习汉译英、标记逐集复习进度。
- 下载 63 份逐集 TXT 学习笔记、六季 Word 学习册、Anki、词汇 CSV、梗概 CSV 及 ZIP。
- 复习进度保存在当前浏览器 localStorage，沿用旧版 `bcs-learning-v1` 键。

公开仓库和下载资料仅包含本项目编写的学习内容。字幕入口指向原始来源的整季合集，不提供完整原剧台词的公开下载。
参考字幕用于选词和定位；时间可能随片源偏移，未逐句对照音轨校订。本项目为非官方英语学习项目。

## 发音说明与致谢

关键词采用常见美式读法的宽式 IPA；/ɝ/、/ɚ/ 表示带 r 色彩的元音，/i/、/u/ 不另加长音符号。音标对应显示的词条形式。词性列出本页讲解的用法；部分词有其他读法或词性。
发音核对参考 [CMU Pronouncing Dictionary](https://github.com/cmusphinx/cmudict) 与页面所列 Merriam-Webster 词条。CMU 词典版权归 Carnegie Mellon University，许可见 [data/CMUDICT-LICENSE.txt](data/CMUDICT-LICENSE.txt)。本项目采用人工整理的 IPA，不逐字复制词典英文释义。
网页、逐集 TXT、Word、Anki 和 CSV 从同一份数据生成。Anki 中跨集多义词保留不同释义及对应集数。

## 预览与生成

直接打开 `index.html`，或运行 `python3 -m http.server 8766 --bind 127.0.0.1`。
网站无运行时依赖。`data/study.json` 是学习内容源；安装 `python-docx` 后，运行 `python3 tools/build.py` 可重新生成网页与下载资料。

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` → `/(root)`。`.nojekyll` 使 GitHub 直接发布静态文件。
