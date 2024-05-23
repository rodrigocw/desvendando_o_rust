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
        width={props.width}
        height={props.height}
        layout="undefined"
        priority // Carrega a imagem com prioridade
      />


  );
}

export default ImageCaption;