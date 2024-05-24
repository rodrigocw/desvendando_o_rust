import Image from "next/image"
import { useState } from "react"

interface ImageCaptionProps {
  src: string
  alt: string
  width: number
  height: number
  unoptimized?: boolean
}

function ImageCaption(props: ImageCaptionProps) {

  return (
      <Image
        src={props.src}
        alt={props.alt}
        width={props.width}
        height={props.height}
        layout="undefined"
        priority // Carrega a imagem com prioridade
        unoptimized={true}
      />


  );
}

export default ImageCaption;