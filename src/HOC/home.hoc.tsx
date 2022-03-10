
import React, { HTMLProps } from 'react'
import ImageSlider from '../components/landing-page/imageSlider/ImageSlider';
import SlidingCard from '../components/landing-page/CardSlider/SlidingCard.component';
import { useAppSelector } from '../store/hooks';
import { fetchState } from '../slices/getProducts.slice';
import ShowingProduct from 'components/landing-page/section3/ShowingProudct.component';

interface Props extends HTMLProps<HTMLAllCollection> {}

export const HomeHOC = (props: Props) => {
    const state = useAppSelector(fetchState);
          return (
            <>
              <ImageSlider/>
              <SlidingCard products={state.allProducts}/>
              <ShowingProduct/>
            </>
          )
}