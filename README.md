# antd-image-cropper

另一个图片裁切工具，用于 Ant Design [Upload](https://ant.design/components/upload-cn/) 组件。

[![npm](https://img.shields.io/npm/v/antd-image-cropper.svg?style=flat-square)](https://www.npmjs.com/package/antd-image-cropper)
[![npm](https://img.shields.io/npm/dt/antd-image-cropper?style=flat-square)](https://www.npmtrends.com/antd-image-cropper)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/antd-image-cropper?style=flat-square)](https://bundlephobia.com/result?p=antd-image-cropper)
[![GitHub](https://img.shields.io/github/license/dream2023/antd-image-cropper?style=flat-square)](https://github.com/dream2023/antd-image-cropper/blob/master/LICENSE)

## 示例

[在线示例](https://dream2023.github.io/antd-image-cropper)

## 为什么做？

项目需要一个图片裁剪工具，通过搜索发现目前有 [antd-img-crop](https://github.com/nanxiaobei/antd-img-crop) 和 [react-cropper](https://www.npmjs.com/package/react-cropper)，但是 `antd-img-crop` 过于简陋，而 `react-cropper` 依赖了 `cropper.js` 过于大，所以才重新做了一个。

## 安装

```sh
yarn add antd-image-cropper
```

## 使用

```jsx
import ImageCropper from 'antd-image-cropper'
import { Upload } from 'antd'

const Demo = () => (
  <ImageCropper>
    <Upload>+ Add image</Upload>
  </ImageCropper>
)
```

## Props

| 属性         | 类型                 | 默认         | 说明                             |
| ------------ | -------------------- | ------------ | -------------------------------- |
| crop       | `boolean`             | `true`            | 是否开启裁剪|
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
