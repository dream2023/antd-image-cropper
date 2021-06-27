import type { Crop } from 'react-image-crop'

interface GetCropCenterOptions {
  img: HTMLImageElement
  aspect?: number
  cropWidth?: number
  cropHeight?: number
  maxWidth?: number
  maxHeight?: number
}

// 获取裁剪区域的中央
export function getCropCenter(options: GetCropCenterOptions) {
  const { img, aspect, cropWidth, cropHeight, maxHeight, maxWidth } = options
  const { width: imageWidth, height: imageHeight } = img

  // 最大百分比
  const maxWidthPercent = maxWidth ? (maxWidth / imageWidth) * 100 : 0
  const maxHeightPercent = maxHeight ? (maxHeight / imageHeight) * 100 : 0

  let widthPercent, heightPercent
  if (cropWidth && cropHeight) {
    // 固定裁剪宽高
    widthPercent = imageWidth < cropWidth ? 100 : 50
    heightPercent = imageWidth < cropHeight ? 100 : 50
  } else if (aspect) {
    // 比例裁剪
    widthPercent =
      imageWidth / aspect < imageHeight * aspect
        ? 100
        : ((imageHeight * aspect) / imageWidth) * 100
    heightPercent =
      imageWidth / aspect > imageHeight * aspect
        ? 100
        : (imageWidth / aspect / imageHeight) * 100
  } else {
    // 默认百分百
    widthPercent = 100
    heightPercent = 100
  }

  // 不能超过最大值
  if (maxWidthPercent && maxWidthPercent < widthPercent) {
    widthPercent = maxHeightPercent
  }
  if (maxHeightPercent && maxHeightPercent < heightPercent) {
    widthPercent = maxHeightPercent
  }

  const x = widthPercent ? (100 - widthPercent) / 2 : 0
  const y = heightPercent ? (100 - heightPercent) / 2 : 0
  return {
    x,
    y,
    width: widthPercent,
    height: heightPercent,
  }
}

// 获得裁剪后的 canvas
export function getCroppedCanvas(image: HTMLImageElement, crop: Crop) {
  const canvas = document.createElement('canvas')
  const scaleX = image.naturalWidth / image.width
  const scaleY = image.naturalHeight / image.height
  canvas.width = ((crop.width || 0) / 100) * image.width
  canvas.height = ((crop.height || 0) / 100) * image.height
  const ctx = canvas.getContext('2d')

  // New lines to be added
  const pixelRatio = window.devicePixelRatio

  if (!ctx || !crop.width || !crop.height) return null

  canvas.width = (crop.width / 100) * image.width * pixelRatio
  canvas.height = (crop.height / 100) * image.height * pixelRatio
  ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
  ctx.imageSmoothingQuality = 'high'

  ctx.drawImage(
    image,
    (Number(crop.x) / 100) * image.width * scaleX,
    (Number(crop.y) / 100) * image.height * scaleY,
    (crop.width / 100) * image.width * scaleX,
    (crop.height / 100) * image.height * scaleY,
    0,
    0,
    (crop.width / 100) * image.width,
    (crop.height / 100) * image.height,
  )

  return canvas
}
