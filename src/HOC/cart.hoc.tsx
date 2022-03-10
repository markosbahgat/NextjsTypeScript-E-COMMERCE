import BoxModel from 'components/boxModel/BoxModel';
import React, { HTMLProps } from 'react'
import ProductCart from '../components/cart-product/Product-Cart.component';
import styles from 'styles/HOC.module.scss';
import { useAppSelector } from '../store/hooks';
import { cartState } from '../slices/cart.slice';

interface Props extends HTMLProps<HTMLAllCollection> {}

export const CARTHOC = (props: Props) => {
    const state = useAppSelector(cartState);
    
    return (
        <BoxModel>
            {state.cartProducts.length >= 1 ? (
                <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around",alignItems:"center"}}>
                    <div className={styles.all_products_container}>
                        {state.cartProducts?.map(product => (
                            <ProductCart product={product} key={product.id} />
                        ))}
                    </div>
                    <div style={{width:"100%"}}>
                        <hr style={{height:"3px", backgroundColor:"black"}}/>
                        <div className={styles.price_container}>
                            <h1>OverAll Price:</h1>
                            <span>${Math.round(state.overAllPrice)}</span>
                        </div>
                    </div>
                </div>
            ) : (<h1 style={{display:"flex", flexDirection:"column", justifyContent:"space-around",alignItems:"center", overflow:"auto", height:"60vh"}}>No Products in the cart!</h1>) }
            {}
        </BoxModel>
    )
}