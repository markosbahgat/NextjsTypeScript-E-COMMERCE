import ProductCard from 'components/product-card/product-card.component'
import React, { HTMLProps } from 'react'
import { CircularProgress } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import { useAppSelector } from '../store/hooks';
import { fetchState } from 'slices/getProducts.slice';
import styles from 'styles/HOC.module.scss';

interface Props extends HTMLProps<HTMLAllCollection> {}

export const HomeHOC = (props: Props) => {
  const state = useAppSelector(fetchState);
    if(state.loading){ 
      console.log("fuck you mother fucker")
      return (
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 5 , backgroundColor:"#222"}}
        open={true}
        >
          <blockquote>
              still loading all produdcts data from the api
          </blockquote>
        <CircularProgress />
      </Backdrop>
        )}
        else{
          return (
            <div className={styles.products_container}>
            {state.allProducts.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))}
            </div>
          )
        }
}