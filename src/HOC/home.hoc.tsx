
import React, { HTMLProps } from 'react'
import ImageSlider from '../components/imageSlider/ImageSlider';

interface Props extends HTMLProps<HTMLAllCollection> {}

export const HomeHOC = (props: Props) => {
  
          return (
            <>
              
            <ImageSlider/>
            </>
          )
}