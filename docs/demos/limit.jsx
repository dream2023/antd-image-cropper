import React, { useState } from 'react'
import ImageCropper from 'antd-image-cropper'
import { Upload } from 'antd'

const Demo = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ])

  const onChange = ({ fileList: newFileList }) => {
    console.log(newFileList)
    setFileList(newFileList)
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML)
    } else {
      window.location.href = src
    }
  }

  return (
    <ImageCropper
      aspectRatio={16 / 9}
      minWidth={100}
      maxWidth={600}
      minHeight={150}
      maxHeight={500}
    >
      <Upload
        action="https://www.fastmock.site/mock/32d872e565fbab87ba76057c18f7f8e0/api/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 3 && '+ Upload'}
      </Upload>
    </ImageCropper>
  )
}

export default Demo
