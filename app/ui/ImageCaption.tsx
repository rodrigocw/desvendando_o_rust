import Image from "next/image"
import { useState } from "react"

interface ImageCaptionProps {
  src: string
  alt: string
  width: number
  height: number
}

function ImageCaption(props: ImageCaptionProps) {

  return (
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width * 0.9}
        height={props.height * 0.9}
        priority
      />
  );
}

export default ImageCaption;