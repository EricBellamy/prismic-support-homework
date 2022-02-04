import React from 'react'
import { FullWidthImage } from "./slices/fullWidthImage";
import { ImageGallery } from "./slices/imageGallery";
import { ImageHighlight } from "./slices/imageHighlight";
import { Quote } from "./slices/quote";
import { TextSection } from "./slices/textSection";

export const SliceSection = ({ slices }) => {
  console.log({ slices })
  return (
    <div>
      {slices.map((slice) => {
        if (slice.slice_type === 'full_width_image') {
          return <FullWidthImage slice={slice} />
        } else if (slice.slice_type === 'image_gallery') {
          return <ImageGallery slice={slice} />
        } else if (slice.slice_type === 'image_highlight') {
          return <ImageHighlight slice={slice} />
        } else if (slice.slice_type === 'quote') {
          return <Quote slice={slice} />
        } else if (slice.slice_type === 'text_section') {
          return <TextSection slice={slice} />
        }
      })}
    </div>
  )
}
