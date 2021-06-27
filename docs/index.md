# antd 图片裁剪组件

另一个图片裁切工具，用于 Ant Design [Upload](https://ant.design/components/upload-cn/) 组件。

## 安装

```bash
yarn add antd-image-cropper
```

## 源码

[antd-image-cropper](https://github.com/dream2023/antd-image-cropper)

## 代码示例

### 基本使用

<code src="./demos/base.jsx" />

### 裁剪比例

<code src="./demos/aspect.jsx" />

### 裁剪区域

> `cropWidth` 和 `cropHeight` 必须同时制定方可生效，且不能和 `aspect` 一起使用。

<code src="./demos/area.jsx" />

### 裁剪区域限制

<code src="./demos/limit.jsx" />

### 圆形显示

<code src="./demos/circular.jsx" />

### 图片质量

<code src="./demos/quality.jsx" />

### 定制弹窗文本

<code src="./demos/modal.jsx" />

## Props

| 属性         | 类型                 | 默认         | 说明                             |
| ------------ | -------------------- | ------------ | -------------------------------- |
| aspect       | `number`             | -            | 裁切区域宽高比，`width / height` |
| cropWidth    | `number`             | -            | 裁剪宽度                         |
| cropHeight   | `number`             | -            | 裁剪高度                         |
| minWidth     | `number`             | -            | 裁剪区域最小宽度                 |
| maxWidth     | `number`             | -            | 裁剪区域最大宽度                 |
| minHeight    | `number`             | -            | 裁剪区域最小高度                 |
| maxHeight    | `number`             | -            | 裁剪区域最大高度                 |
| circularCrop | `boolean`            | `false`      | 裁切区域是否为圆形               |
| grid         | `boolean`            | `false`      | 显示裁切区域网格（九宫格）       |
| quality      | `number`             | -            | 图片质量，`0 ~ 1`                |
| modalTitle   | `string`             | `'裁剪图片'` | 弹窗标题                         |
| modalWidth   | `number` \| `string` | -            | 弹窗宽度，`px` 的数值或百分比    |
| modalOk      | `string`             | `'确定'`     | 弹窗确定按钮文字                 |
| modalCancel  | `string`             | `'取消'`     | 弹窗取消按钮文字                 |
