import React, { useState } from 'react'
import ImageCropper from 'antd-image-cropper'
import { Upload } from 'antd'

const Demo = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      url: 'https://scpic.chinaz.net/files/pic/pic9/201703/zzpic2008.jpg',
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
    <ImageCropper circularCrop>
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
