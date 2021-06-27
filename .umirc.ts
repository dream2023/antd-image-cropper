import { defineConfig } from 'dumi'

export default defineConfig({
  title: 'antd-image-cropper',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  base: '/antd-image-cropper',
  publicPath: '/antd-image-cropper/',
  exportStatic: {},
  styles: [
    `
      .__dumi-default-menu { display: none; };
      .__dumi-default-layout {
        padding: 16px 194px 50px 194px;
      }
    `
  ]
})
