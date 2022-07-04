# 自动导出 iconfont 中自己账号的字体

## 为什么会有这个需求
前段时间 iconfont 维护了好几天不能使用 
![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13b1b5b10d37486bb85348bd60513d24~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp)
但是工作还得继续，给团队的图标更新带来了不少麻烦，就想着把项目里的 icon 都导出，然后找个替代品。
但是导出的时候发现无法进行批量导出，虽然可以通过加入购物车然后再导出，但是购物车只能一次性导出 20 个，而且项目里动辄接近 300 个图标挨个点也不是一回事。
于是写了这个 hrome 插件导出项目里的 icon。

因为后续准备自建 svg sprite，所以就选择直接导出 svg 了，也方便后续维护。（为什么没有更好的iconfont替代品，iconpark也不行，有些图标莫名其妙说违规不给传，还只能建3个项目。

## 使用方式
自行解决浏览器插件安装方式

安装成功之后，刷新页面，会出现如图按钮，选择需要下载的项目，插件会依次点击图标的下载按钮进行下载。
![image](https://user-images.githubusercontent.com/1334025/177157844-f0eddb12-daae-4636-89e1-e4e799fd19a6.png)
