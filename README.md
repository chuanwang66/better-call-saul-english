# 风骚律师逐集英语学习册

六季 63 集，每集 10 条学习记录，共 215 组独立表达、645 个原创双语例句和 189 道汉译英练习。

网站：https://chuanwang66.github.io/better-call-saul-english/

## 功能

- 按季浏览，搜索表达、中文与例句。
- 隐藏中文练习理解，标记逐集复习进度。
- 下载六季 Word 学习册、Anki 文件和逐集 CSV 索引。
- 复习进度只保存在当前浏览器的 localStorage 中。

## 本地预览

在仓库目录运行 `python3 -m http.server 8766 --bind 127.0.0.1`，访问 http://127.0.0.1:8766/ 。
也可直接用浏览器打开 `index.html`。无需安装依赖或构建。

## GitHub Pages

在 Settings → Pages 中选择 Deploy from a branch，分支选择 `main`，目录选择 `/(root)`，保存。
`.nojekyll` 使 GitHub 直接发布静态文件。

## 文件

- `index.html`：逐集学习内容。
- `assets/`：样式、交互脚本和图标。
- `downloads/`：本项目编写的学习资料。

公开仓库包含学习解释、原创例句与练习；字幕通过来源页面获取。
时间定位对应参考字幕版本，不同片源可能有偏移，未逐句对照音轨校订。
这是非官方英语学习项目。
