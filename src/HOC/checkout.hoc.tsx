import CheckoutContainer from 'components/checkout/checkout.component';
import React, { HTMLProps } from 'react'
import { useAppSelector } from 'store/hooks';
import { cartState } from 'slices/cart.slice';
import ItemsContianer from 'components/checkout/items.component';
import Link from 'next/link'
interface Props extends HTMLProps<HTMLAllCollection> {}

export const CHECKOUTHOC = (props: Props) => {
    const state = useAppSelector(cartState);
    if(state.cartProducts.length > 0){
        return (
            <div style={{width:"90%", display:"flex", flexDirection:"row", justifyContent:"space-around", alignItems:"flex-start",margin:"auto",backgroundColor:"#eee", minHeight:"100vh"}}>
                    <CheckoutContainer/>
                   <ItemsContianer cartProucts={state.cartProducts} total={state.overAllPrice}/>
            </div>
        )

    }
    else{
        return(
        <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center",margin:"100px auto", fontSize:"30px"}}>
            <p style={{ fontSize:"30px"}}>Go Shopping and Get Some Products in the Cart, Man!</p>
            <Link href='/products'><a style={{ color:"black", textDecoration:"none", padding:"0.5em 1em", boxShadow:"0 3px 10px rgba(0, 0, 0, 0.2)", fontSize:"20px", borderRadius:"10px"}}>Go To Products</a></Link>
        </div>
        )
    }
}